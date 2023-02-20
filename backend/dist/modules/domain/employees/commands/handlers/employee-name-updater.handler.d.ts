import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployeeName } from '../update-employee-name.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeNameUpdater extends BaseCommandHandler<UpdateEmployeeName, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployeeName): Promise<void>;
}
