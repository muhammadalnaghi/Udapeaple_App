import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployeeSalaryType } from '../update-employee-salary-type.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeSalaryTypeUpdater extends BaseCommandHandler<UpdateEmployeeSalaryType, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployeeSalaryType): Promise<void>;
}
