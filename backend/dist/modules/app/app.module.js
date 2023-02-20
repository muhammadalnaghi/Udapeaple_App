"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const status_module_1 = require("../status/status.module");
const status_controller_1 = require("../status/status.controller");
const app_logger_1 = require("./app.logger");
const config_module_1 = require("../config/config.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_service_1 = require("../config/config.service");
const orders_module_1 = require("../domain/orders/orders.module");
const employee_module_1 = require("../domain/employees/employee.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            status_module_1.StatusModule,
            config_module_1.ConfigModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                inject: [config_service_1.ConfigService],
                useFactory: (config) => config.TypeOrmDatabase,
            }),
            orders_module_1.OrdersModule,
            employee_module_1.EmployeeModule,
        ],
        controllers: [status_controller_1.StatusController],
        providers: [app_service_1.AppService, app_logger_1.AppLogger],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map