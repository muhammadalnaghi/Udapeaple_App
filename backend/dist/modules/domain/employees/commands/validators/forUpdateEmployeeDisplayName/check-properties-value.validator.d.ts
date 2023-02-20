import { UpdateEmployeeDisplayName } from '../../update-employee-display-name.command';
import { JoiCommandValidator } from '../../../../../common/commands/validation';
export declare class CheckUpdateDisplayNamePropertiesValue extends JoiCommandValidator<UpdateEmployeeDisplayName> {
    getSchema(command: UpdateEmployeeDisplayName): any;
}
