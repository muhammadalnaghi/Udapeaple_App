import { CompositeValidator } from '../../../../../common/commands/validation/CompositeValidator';
import { CreateEmployee } from '../../create-employee.command';
import { CheckPropertiesValue } from './check-properties-value.validator';
export declare class CreateEmployeeCompositeValidator extends CompositeValidator<CreateEmployee> {
    constructor(joiValidator: CheckPropertiesValue);
}
