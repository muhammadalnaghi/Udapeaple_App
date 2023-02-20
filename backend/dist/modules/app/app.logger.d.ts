import { LoggerService } from '@nestjs/common';
export declare class AppLogger implements LoggerService {
    private logger;
    constructor();
    log(message: string): void;
    error(message: string, trace?: string, context?: string): void;
    warn(message: string): void;
    info(message: string): void;
    debug(message: string): void;
}
