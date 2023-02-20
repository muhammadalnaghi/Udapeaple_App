import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { SyncCommandDispatcher } from '../../common/commands';
export declare class OrdersModule implements OnModuleInit {
    private readonly moduleRef;
    private readonly command$;
    constructor(moduleRef: ModuleRef, command$: SyncCommandDispatcher);
    onModuleInit(): void;
}
