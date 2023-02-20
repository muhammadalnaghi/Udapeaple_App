import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AboutInfo } from './about.interface';
export interface EnvConfig {
    VERSION: string;
    NODE_ENV: string;
    BACKEND_PORT: number;
    LOGGLY_SUBDOMAIN: string;
    LOGGLY_TOKEN: string;
    TYPEORM_CONNECTION: any;
    TYPEORM_ENTITIES: string;
    TYPEORM_HOST: string;
    TYPEORM_PORT: number;
    TYPEORM_DATABASE: string;
    TYPEORM_USERNAME: string;
    TYPEORM_PASSWORD: string;
    TYPEORM_LOGGING: string;
    CORS_WHITELIST: string;
    AUTH0_DOMAIN: string;
    AUTH0_AUDIENCE: string;
}
export declare class ConfigService {
    private readonly envConfig;
    constructor();
    private validateInput;
    get about(): AboutInfo;
    get NODE_ENV(): string;
    get PORT(): number;
    get LOGGLY_SUBDOMAIN(): string;
    get LOGGLY_TOKEN(): string;
    get CORS_WHITELIST(): string[];
    get TypeOrmDatabase(): TypeOrmModuleOptions;
    get AUTH0_DOMAIN(): string;
    get AUTH0_AUDIENCE(): string;
}
