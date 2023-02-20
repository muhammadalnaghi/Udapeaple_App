import { OnModuleInit } from '@nestjs/common';
import { SyncCommandDispatcher } from '../../common';
import { ModuleRef } from '@nestjs/core';
export declare class EmployeeModule implements OnModuleInit {
    private readonly moduleRef;
    private readonly command$;
    constructor(moduleRef: ModuleRef, command$: SyncCommandDispatcher);
    onModuleInit(): void;
}
