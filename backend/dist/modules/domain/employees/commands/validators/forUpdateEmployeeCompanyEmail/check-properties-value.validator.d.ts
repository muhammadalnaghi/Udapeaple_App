import { UpdateEmployeeCompanyEmail } from '../../update-employee-company-email.command';
import { JoiCommandValidator } from '../../../../../common/commands/validation';
export declare class CheckUpdateCompanyEmailPropertiesValue extends JoiCommandValidator<UpdateEmployeeCompanyEmail> {
    getSchema(command: UpdateEmployeeCompanyEmail): any;
}
