import { CompositeValidator } from '../../../../../common/commands/validation/CompositeValidator';
import { UpdateEmployeeTags } from '../../update-employee-tags.command';
import { CheckEmployeeTagsExists } from './check-employee-exists.validator';
import { CheckUpdateTagsPropertiesValue } from './check-properties-value.validator';
export declare class UpdateEmployeeTagsCompositeValidator extends CompositeValidator<UpdateEmployeeTags> {
    constructor(joiValidator: CheckUpdateTagsPropertiesValue, checkEmployeeExists: CheckEmployeeTagsExists);
}
