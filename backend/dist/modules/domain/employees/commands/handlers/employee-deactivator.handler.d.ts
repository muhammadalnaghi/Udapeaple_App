import { DeactivateEmployee } from '../deactivate-employee.command';
import { BaseCommandHandler } from '../../../../common/commands';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeDeactivator extends BaseCommandHandler<DeactivateEmployee, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: DeactivateEmployee): Promise<void>;
}
