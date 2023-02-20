import { UpdateEmployeePersonalEmail } from '../../update-employee-personal-email.command';
import { JoiCommandValidator } from '../../../../../common/commands/validation';
export declare class CheckUpdatePersonalEmailPropertiesValue extends JoiCommandValidator<UpdateEmployeePersonalEmail> {
    getSchema(command: UpdateEmployeePersonalEmail): any;
}
