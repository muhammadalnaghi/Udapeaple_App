import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { UpdateEmployeePersonalEmail } from '../../update-employee-personal-email.command';
import { EmployeeRepository } from '../../../repositories/employees.repository';
export declare class CheckEmployeePersonalEmailExists implements ICommandValidator<UpdateEmployeePersonalEmail> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: UpdateEmployeePersonalEmail): Promise<IValidationResult>;
}
