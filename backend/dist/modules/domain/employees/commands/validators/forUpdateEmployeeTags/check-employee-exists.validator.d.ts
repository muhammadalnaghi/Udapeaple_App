import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { UpdateEmployeeTags } from '../../update-employee-tags.command';
import { EmployeeRepository } from '../../../repositories/employees.repository';
export declare class CheckEmployeeTagsExists implements ICommandValidator<UpdateEmployeeTags> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: UpdateEmployeeTags): Promise<IValidationResult>;
}
