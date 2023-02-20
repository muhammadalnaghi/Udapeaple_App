import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployeeEffectiveDate } from '../update-employee-effective-date.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeEffectiveDateUpdater extends BaseCommandHandler<UpdateEmployeeEffectiveDate, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployeeEffectiveDate): Promise<void>;
}
