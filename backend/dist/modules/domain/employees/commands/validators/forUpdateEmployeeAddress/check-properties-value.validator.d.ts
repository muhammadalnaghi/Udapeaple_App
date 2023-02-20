import { UpdateEmployeeAddress } from '../../update-employee-address.command';
import { JoiCommandValidator } from '../../../../../common/commands/validation';
export declare class CheckUpdateAddressPropertiesValue extends JoiCommandValidator<UpdateEmployeeAddress> {
    getSchema(command: UpdateEmployeeAddress): any;
}
