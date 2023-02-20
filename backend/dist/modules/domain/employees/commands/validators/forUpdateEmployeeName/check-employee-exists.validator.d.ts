import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { UpdateEmployeeName } from '../../update-employee-name.command';
import { EmployeeRepository } from '../../../repositories/employees.repository';
export declare class CheckEmployeeNameExists implements ICommandValidator<UpdateEmployeeName> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: UpdateEmployeeName): Promise<IValidationResult>;
}
