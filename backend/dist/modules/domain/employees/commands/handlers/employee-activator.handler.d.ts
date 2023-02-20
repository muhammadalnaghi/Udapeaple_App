import { ActivateEmployee } from '../activate-employee.command';
import { BaseCommandHandler } from '../../../../common/commands';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeActivator extends BaseCommandHandler<ActivateEmployee, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: ActivateEmployee): Promise<void>;
}
