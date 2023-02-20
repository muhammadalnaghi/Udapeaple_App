import { Type } from '@nestjs/common';
import { ICommandValidator } from './validation';
import { ICommand } from './ICommand';
import { CommandBus } from '@nestjs/cqrs';
import { CommandValidatorMetatype, ICommandDispatcher } from './commandDispatcher';
import { ICommandHandler } from './ICommandHandler';
export declare type CommandHandlerMetatype = Type<ICommandHandler<ICommand, any>>;
export declare class SyncCommandDispatcher implements ICommandDispatcher {
    private commandBus;
    validators: Map<string, ICommandValidator<ICommand>>;
    moduleRef: any;
    constructor(commandBus: CommandBus);
    registerValidators(commandValidators: CommandValidatorMetatype[]): void;
    setModuleRef(moduleRef: any): void;
    execute<T extends ICommand>(command: T): Promise<any>;
    protected registerValidator(validator: CommandValidatorMetatype): void;
    bindValidator<T extends ICommand>(validator: ICommandValidator<T>, name: string): void;
    private getCommandName;
    private reflectCommandName;
}
