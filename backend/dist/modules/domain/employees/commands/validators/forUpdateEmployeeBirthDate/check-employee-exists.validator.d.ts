import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { UpdateEmployeeBirthdate } from '../../update-employee-birthdate.command';
import { EmployeeRepository } from '../../../repositories/employees.repository';
export declare class CheckEmployeeBirthDateExists implements ICommandValidator<UpdateEmployeeBirthdate> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: UpdateEmployeeBirthdate): Promise<IValidationResult>;
}
