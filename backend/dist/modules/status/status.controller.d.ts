import { ConfigService } from '../config/config.service';
export declare class StatusController {
    private readonly configService;
    constructor(configService: ConfigService);
    status(): {
        status: string;
        version: string;
        environment: string;
    };
}
