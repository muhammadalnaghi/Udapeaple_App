import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { UpdateEmployeeSalary } from '../../update-employee-salary.command';
import { EmployeeRepository } from '../../../repositories/employees.repository';
export declare class CheckEmployeeSalaryExists implements ICommandValidator<UpdateEmployeeSalary> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: UpdateEmployeeSalary): Promise<IValidationResult>;
}
