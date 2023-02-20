import { CompositeValidator } from '../../../../../common/commands/validation/CompositeValidator';
import { UpdateEmployeeName } from '../../update-employee-name.command';
import { CheckEmployeeNameExists } from './check-employee-exists.validator';
import { CheckUpdateNamePropertiesValue } from './check-properties-value.validator';
export declare class UpdateEmployeeNameCompositeValidator extends CompositeValidator<UpdateEmployeeName> {
    constructor(joiValidator: CheckUpdateNamePropertiesValue, checkEmployeeExists: CheckEmployeeNameExists);
}
