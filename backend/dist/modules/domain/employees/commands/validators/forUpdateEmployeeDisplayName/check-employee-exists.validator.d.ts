import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { UpdateEmployeeDisplayName } from '../../update-employee-display-name.command';
import { EmployeeRepository } from '../../../repositories/employees.repository';
export declare class CheckEmployeeDisplayNameExists implements ICommandValidator<UpdateEmployeeDisplayName> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: UpdateEmployeeDisplayName): Promise<IValidationResult>;
}
