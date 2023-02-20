import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployeePhoneNumber } from '../update-employee-phone-number.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
export declare class EmployeePhoneNumberUpdater extends BaseCommandHandler<UpdateEmployeePhoneNumber, void> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: UpdateEmployeePhoneNumber): Promise<void>;
}
