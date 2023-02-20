import { OnModuleInit } from '@nestjs/common';
import { CommandBus } from './command-bus';
import { EventBus } from './event-bus';
import { QueryBus } from './query-bus';
import { ExplorerService } from './services/explorer.service';
export declare class CqrsModule implements OnModuleInit {
    private readonly explorerService;
    private readonly eventsBus;
    private readonly commandsBus;
    private readonly queryBus;
    constructor(explorerService: ExplorerService, eventsBus: EventBus, commandsBus: CommandBus, queryBus: QueryBus);
    onModuleInit(): void;
}
