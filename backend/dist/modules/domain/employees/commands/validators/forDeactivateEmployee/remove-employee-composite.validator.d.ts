import { CompositeValidator } from '../../../../../common/commands/validation/CompositeValidator';
import { DeactivateEmployee } from '../../deactivate-employee.command';
import { CheckEmployeeExistsOnDeactivate } from './check-employee-exists.validator';
export declare class DeactivateEmployeeCompositeValidator extends CompositeValidator<DeactivateEmployee> {
    constructor(checkEmployeeExists: CheckEmployeeExistsOnDeactivate);
}
