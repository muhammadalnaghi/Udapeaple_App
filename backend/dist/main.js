"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./modules/app/app.module");
const app_logger_1 = require("./modules/app/app.logger");
const platform_express_1 = require("@nestjs/platform-express");
const cors = require("cors");
const TransformInterceptor_1 = require("./modules/common/interceptors/TransformInterceptor");
const express = require("express");
const error_filter_1 = require("./modules/errors/error.filter");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const logger = new app_logger_1.AppLogger();
        logger.info(`NodeJs Version ${process.version}`);
        logger.info(JSON.stringify(process.env));
        const server = express();
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server), {
            logger,
        });
        app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true }));
        const apiVersionPrefix = process.env.API_VERSION || 'api';
        app.setGlobalPrefix(apiVersionPrefix);
        app.useGlobalInterceptors(new TransformInterceptor_1.TransformInterceptor());
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Glee2')
            .setDescription('Glee2 API')
            .setVersion('1.0')
            .addTag('customTag')
            .setBasePath(apiVersionPrefix)
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup(`api/${apiVersionPrefix}`, app, document);
        const config = app.get('ConfigService');
        const whitelist = config.CORS_WHITELIST;
        const corsOptions = {
            origin(origin, callback) {
                const isOriginAllowed = whitelist.indexOf(origin) !== -1;
                const allowAccessAnyway = whitelist.length === 0;
                if (isOriginAllowed || allowAccessAnyway) {
                    callback(null, true);
                }
                else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
        };
        app.use(cors(corsOptions));
        app.useGlobalFilters(new error_filter_1.ErrorFilter());
        yield app.listen(config.PORT);
        logger.log(`Listening on port ${config.PORT}.`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map