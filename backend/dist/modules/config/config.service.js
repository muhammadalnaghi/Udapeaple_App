"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
class ConfigService {
    constructor() {
        this.envConfig = this.validateInput(process.env);
    }
    validateInput(envConfig) {
        const envVarsSchema = Joi.object({
            TYPEORM_CONNECTION: Joi.string().default('postgres'),
            VERSION: Joi.string().default('local'),
            NODE_ENV: Joi.string()
                .valid('local', 'development', 'production', 'test', 'provision')
                .default('local'),
            BACKEND_PORT: Joi.number().default(3030),
            LOGGLY_SUBDOMAIN: Joi.string(),
            LOGGLY_TOKEN: Joi.string(),
            TYPEORM_ENTITIES: Joi.string().required(),
            TYPEORM_USERNAME: Joi.string().required(),
            TYPEORM_PASSWORD: Joi.string().required(),
            TYPEORM_DATABASE: Joi.string().required(),
            TYPEORM_HOST: Joi.string().required(),
            TYPEORM_PORT: Joi.number()
                .integer()
                .default(5432),
            TYPEORM_MIGRATIONS: Joi.string(),
            CORS_WHITELIST: Joi.string().default(''),
            TYPEORM_LOGGING: Joi.string().default('false'),
        }).unknown();
        const { error, value: validatedEnvConfig } = envVarsSchema.validate(envConfig);
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }
    get about() {
        return {
            version: process.env.npm_package_version,
            environment: this.envConfig.NODE_ENV,
        };
    }
    get NODE_ENV() {
        return this.envConfig.NODE_ENV;
    }
    get PORT() {
        return this.envConfig.BACKEND_PORT;
    }
    get LOGGLY_SUBDOMAIN() {
        return this.envConfig.LOGGLY_SUBDOMAIN;
    }
    get LOGGLY_TOKEN() {
        return this.envConfig.LOGGLY_TOKEN;
    }
    get CORS_WHITELIST() {
        if (!this.envConfig.CORS_WHITELIST) {
            return [];
        }
        return this.envConfig.CORS_WHITELIST.split(',');
    }
    get TypeOrmDatabase() {
        return {
            type: this.envConfig.TYPEORM_CONNECTION,
            host: this.envConfig.TYPEORM_HOST,
            port: this.envConfig.TYPEORM_PORT,
            username: this.envConfig.TYPEORM_USERNAME,
            password: this.envConfig.TYPEORM_PASSWORD,
            database: this.envConfig.TYPEORM_DATABASE,
            entities: [this.envConfig.TYPEORM_ENTITIES],
            logging: this.envConfig.TYPEORM_LOGGING === 'true',
            extra: { max: 4, min: 1 },
            synchronize: false,
        };
    }
    get AUTH0_DOMAIN() {
        return this.envConfig.AUTH0_DOMAIN;
    }
    get AUTH0_AUDIENCE() {
        return this.envConfig.AUTH0_AUDIENCE;
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map