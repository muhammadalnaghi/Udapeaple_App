import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployeeCompanyEmail } from '../update-employee-company-email.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeCompanyEmailUpdater extends BaseCommandHandler<UpdateEmployeeCompanyEmail, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployeeCompanyEmail): Promise<void>;
}
