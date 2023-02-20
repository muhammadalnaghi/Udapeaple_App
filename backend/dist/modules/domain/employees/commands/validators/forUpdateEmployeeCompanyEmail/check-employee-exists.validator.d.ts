import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { UpdateEmployeeCompanyEmail } from '../../update-employee-company-email.command';
import { EmployeeRepository } from '../../../repositories/employees.repository';
export declare class CheckEmployeeCompanyEmailExists implements ICommandValidator<UpdateEmployeeCompanyEmail> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: UpdateEmployeeCompanyEmail): Promise<IValidationResult>;
}
