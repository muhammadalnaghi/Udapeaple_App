import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployeeDisplayName } from '../update-employee-display-name.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeDisplayNameUpdater extends BaseCommandHandler<UpdateEmployeeDisplayName, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployeeDisplayName): Promise<void>;
}
