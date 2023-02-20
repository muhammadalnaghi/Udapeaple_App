import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { UpdateEmployeePhoneNumber } from '../../update-employee-phone-number.command';
import { EmployeeRepository } from '../../../repositories/employees.repository';
export declare class CheckEmployeePhoneNumberExists implements ICommandValidator<UpdateEmployeePhoneNumber> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: UpdateEmployeePhoneNumber): Promise<IValidationResult>;
}
