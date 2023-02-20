import { UpdateEmployeeName } from '../../update-employee-name.command';
import { JoiCommandValidator } from '../../../../../common/commands/validation';
export declare class CheckUpdateNamePropertiesValue extends JoiCommandValidator<UpdateEmployeeName> {
    getSchema(command: UpdateEmployeeName): any;
}
