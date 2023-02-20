import { CompositeValidator } from '../../../../../common/commands/validation/CompositeValidator';
import { UpdateEmployeePersonalEmail } from '../../update-employee-personal-email.command';
import { CheckEmployeePersonalEmailExists } from './check-employee-exists.validator';
import { CheckUpdatePersonalEmailPropertiesValue } from './check-properties-value.validator';
export declare class UpdateEmployeePersonalEmailCompositeValidator extends CompositeValidator<UpdateEmployeePersonalEmail> {
    constructor(joiValidator: CheckUpdatePersonalEmailPropertiesValue, checkEmployeeExists: CheckEmployeePersonalEmailExists);
}
