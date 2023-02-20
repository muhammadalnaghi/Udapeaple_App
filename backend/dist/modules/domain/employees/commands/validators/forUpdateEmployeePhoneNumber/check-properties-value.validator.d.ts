import { UpdateEmployeePhoneNumber } from '../../update-employee-phone-number.command';
import { JoiCommandValidator } from '../../../../../common/commands/validation';
export declare class CheckUpdatePhoneNumberPropertiesValue extends JoiCommandValidator<UpdateEmployeePhoneNumber> {
    getSchema(command: UpdateEmployeePhoneNumber): any;
}
