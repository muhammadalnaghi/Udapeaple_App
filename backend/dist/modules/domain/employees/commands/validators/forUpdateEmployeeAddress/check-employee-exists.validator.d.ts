import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { UpdateEmployeeAddress } from '../../update-employee-address.command';
import { EmployeeRepository } from '../../../repositories/employees.repository';
export declare class CheckEmployeeAddressExists implements ICommandValidator<UpdateEmployeeAddress> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: UpdateEmployeeAddress): Promise<IValidationResult>;
}
