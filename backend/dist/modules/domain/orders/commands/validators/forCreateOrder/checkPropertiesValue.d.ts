import { JoiCommandValidator } from '../../../../../common/commands/validation';
import { CreateOrder } from '../../createOrder';
export declare class CheckPropertiesValue extends JoiCommandValidator<CreateOrder> {
    getSchema(command: CreateOrder): any;
}
