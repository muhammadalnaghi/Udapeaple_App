import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployeePersonalEmail } from '../update-employee-personal-email.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeePersonalEmailUpdater extends BaseCommandHandler<UpdateEmployeePersonalEmail, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployeePersonalEmail): Promise<void>;
}
