import { UpdateEmployeeBirthdate } from '../../update-employee-birthdate.command';
import { JoiCommandValidator } from '../../../../../common/commands/validation';
export declare class CheckUpdateBirthDatePropertiesValue extends JoiCommandValidator<UpdateEmployeeBirthdate> {
    getSchema(command: UpdateEmployeeBirthdate): any;
}
