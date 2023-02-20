import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployeeTags } from '../update-employee-tags.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeTagsUpdater extends BaseCommandHandler<UpdateEmployeeTags, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployeeTags): Promise<void>;
}
