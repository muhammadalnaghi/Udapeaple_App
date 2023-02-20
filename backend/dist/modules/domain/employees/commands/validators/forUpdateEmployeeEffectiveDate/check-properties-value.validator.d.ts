import { UpdateEmployeeEffectiveDate } from '../../update-employee-effective-date.command';
import { JoiCommandValidator } from '../../../../../common/commands/validation';
export declare class CheckUpdateEffectiveDatePropertiesValue extends JoiCommandValidator<UpdateEmployeeEffectiveDate> {
    getSchema(command: UpdateEmployeeEffectiveDate): any;
}
