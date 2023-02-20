import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployee } from '../update-employee.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeUpdater extends BaseCommandHandler<UpdateEmployee, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployee): Promise<void>;
}
