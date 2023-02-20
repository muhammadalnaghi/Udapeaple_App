import { ICommand } from './ICommand';
import { ICommandHandler } from './ICommandHandler';
export declare abstract class BaseCommandHandler<TCommand extends ICommand, TResult> implements ICommandHandler<TCommand, TResult> {
    execute(command: TCommand): Promise<any>;
    abstract handle(command: TCommand): Promise<TResult>;
}
