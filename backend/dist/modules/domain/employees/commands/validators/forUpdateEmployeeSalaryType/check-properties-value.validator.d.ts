import { UpdateEmployeeSalaryType } from '../../update-employee-salary-type.command';
import { JoiCommandValidator } from '../../../../../common/commands/validation';
export declare class CheckUpdateSalaryTypePropertiesValue extends JoiCommandValidator<UpdateEmployeeSalaryType> {
    getSchema(command: UpdateEmployeeSalaryType): any;
}
