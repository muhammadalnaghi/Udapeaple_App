import { IValidationResult } from './IValidationResult';
import { ICommandValidator } from './ICommandValidator';
export declare abstract class JoiCommandValidator<TCommand> implements ICommandValidator<TCommand> {
    validate(command: TCommand): Promise<IValidationResult>;
    abstract getSchema(command: TCommand): any;
}
