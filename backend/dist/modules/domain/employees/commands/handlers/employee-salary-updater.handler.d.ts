import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployeeSalary } from '../update-employee-salary.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeSalaryUpdater extends BaseCommandHandler<UpdateEmployeeSalary, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployeeSalary): Promise<void>;
}
