import { CompositeValidator } from '../../../../../common/commands/validation/CompositeValidator';
import { UpdateEmployeeSalaryType } from '../../update-employee-salary-type.command';
import { CheckEmployeeSalaryTypeExists } from './check-employee-exists.validator';
import { CheckUpdateSalaryTypePropertiesValue } from './check-properties-value.validator';
export declare class UpdateEmployeeSalaryTypeCompositeValidator extends CompositeValidator<UpdateEmployeeSalaryType> {
    constructor(joiValidator: CheckUpdateSalaryTypePropertiesValue, checkEmployeeExists: CheckEmployeeSalaryTypeExists);
}
