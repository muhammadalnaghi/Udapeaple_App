import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployeeAddress } from '../update-employee-address.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeeAddressUpdater extends BaseCommandHandler<UpdateEmployeeAddress, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployeeAddress): Promise<void>;
}
