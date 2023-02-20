import { UpdateEmployeeTags } from '../../update-employee-tags.command';
import { JoiCommandValidator } from '../../../../../common/commands/validation';
export declare class CheckUpdateTagsPropertiesValue extends JoiCommandValidator<UpdateEmployeeTags> {
    getSchema(command: UpdateEmployeeTags): any;
}
