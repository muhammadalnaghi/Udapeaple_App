import { CompositeValidator } from '../../../../../common/commands/validation/CompositeValidator';
import { UpdateEmployeeEffectiveDate } from '../../update-employee-effective-date.command';
import { CheckEmployeeEffectiveDateExists } from './check-employee-exists.validator';
import { CheckUpdateEffectiveDatePropertiesValue } from './check-properties-value.validator';
export declare class UpdateEmployeeEffectiveDateCompositeValidator extends CompositeValidator<UpdateEmployeeEffectiveDate> {
    constructor(joiValidator: CheckUpdateEffectiveDatePropertiesValue, checkEmployeeExists: CheckEmployeeEffectiveDateExists);
}
