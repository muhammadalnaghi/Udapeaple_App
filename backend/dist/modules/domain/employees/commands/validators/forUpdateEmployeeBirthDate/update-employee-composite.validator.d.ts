import { CompositeValidator } from '../../../../../common/commands/validation/CompositeValidator';
import { UpdateEmployeeBirthdate } from '../../update-employee-birthdate.command';
import { CheckEmployeeBirthDateExists } from './check-employee-exists.validator';
import { CheckUpdateBirthDatePropertiesValue } from './check-properties-value.validator';
export declare class UpdateEmployeeBirthDateCompositeValidator extends CompositeValidator<UpdateEmployeeBirthdate> {
    constructor(joiValidator: CheckUpdateBirthDatePropertiesValue, checkEmployeeExists: CheckEmployeeBirthDateExists);
}
