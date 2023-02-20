import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployeeBirthdate } from '../update-employee-birthdate.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeBirthDateUpdater extends BaseCommandHandler<UpdateEmployeeBirthdate, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployeeBirthdate): Promise<void>;
}
