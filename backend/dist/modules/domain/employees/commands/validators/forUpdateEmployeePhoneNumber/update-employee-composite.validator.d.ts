import { CompositeValidator } from '../../../../../common/commands/validation/CompositeValidator';
import { UpdateEmployeePhoneNumber } from '../../update-employee-phone-number.command';
import { CheckEmployeePhoneNumberExists } from './check-employee-exists.validator';
import { CheckUpdatePhoneNumberPropertiesValue } from './check-properties-value.validator';
export declare class UpdateEmployeePhoneNumberCompositeValidator extends CompositeValidator<UpdateEmployeePhoneNumber> {
    constructor(joiValidator: CheckUpdatePhoneNumberPropertiesValue, checkEmployeeExists: CheckEmployeePhoneNumberExists);
}
