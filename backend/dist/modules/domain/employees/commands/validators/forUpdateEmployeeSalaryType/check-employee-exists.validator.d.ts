import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { UpdateEmployeeSalaryType } from '../../update-employee-salary-type.command';
import { EmployeeRepository } from '../../../repositories/employees.repository';
export declare class CheckEmployeeSalaryTypeExists implements ICommandValidator<UpdateEmployeeSalaryType> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: UpdateEmployeeSalaryType): Promise<IValidationResult>;
}
