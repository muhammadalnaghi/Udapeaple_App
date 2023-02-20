import { UpdateEmployeeSalary } from '../../update-employee-salary.command';
import { JoiCommandValidator } from '../../../../../common/commands/validation';
export declare class CheckUpdateSalaryPropertiesValue extends JoiCommandValidator<UpdateEmployeeSalary> {
    getSchema(command: UpdateEmployeeSalary): any;
}
