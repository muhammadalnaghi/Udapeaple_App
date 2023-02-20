import { ICommandValidator } from './ICommandValidator';
import { IValidationResult } from './IValidationResult';
export declare class CompositeValidator<TCommand> implements ICommandValidator<TCommand> {
    private validators;
    constructor(validators: ICommandValidator<TCommand>[]);
    validate(command: TCommand): Promise<IValidationResult>;
}
