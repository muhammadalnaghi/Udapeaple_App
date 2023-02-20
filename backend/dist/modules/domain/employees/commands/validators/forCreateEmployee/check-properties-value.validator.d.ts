import { JoiCommandValidator } from '../../../../../common/commands/validation';
import { CreateEmployee } from '../../create-employee.command';
export declare class CheckPropertiesValue extends JoiCommandValidator<CreateEmployee> {
    getSchema(command: CreateEmployee): any;
}
