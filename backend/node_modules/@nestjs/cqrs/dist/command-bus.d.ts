import { Type } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import 'reflect-metadata';
import { ICommand, ICommandBus, ICommandHandler } from './interfaces/index';
import { ObservableBus } from './utils/observable-bus';
export declare type CommandHandlerType = Type<ICommandHandler<ICommand>>;
export declare class CommandBus extends ObservableBus<ICommand> implements ICommandBus {
    private readonly moduleRef;
    private handlers;
    constructor(moduleRef: ModuleRef);
    execute<T extends ICommand>(command: T): Promise<any>;
    bind<T extends ICommand>(handler: ICommandHandler<T>, name: string): void;
    register(handlers?: CommandHandlerType[]): void;
    protected registerHandler(handler: CommandHandlerType): void;
    private getCommandName;
    private reflectCommandName;
}
