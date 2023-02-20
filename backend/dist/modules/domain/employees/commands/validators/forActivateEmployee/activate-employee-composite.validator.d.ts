import { CompositeValidator } from '../../../../../common/commands/validation/CompositeValidator';
import { ActivateEmployee } from '../../activate-employee.command';
import { CheckEmployeeExistsOnActivate } from './check-employee-exists.validator';
export declare class ActivateEmployeeCompositeValidator extends CompositeValidator<ActivateEmployee> {
    constructor(checkEmployeeExists: CheckEmployeeExistsOnActivate);
}
