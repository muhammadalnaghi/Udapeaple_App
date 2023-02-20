import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { EmployeeRepository } from '../../../repositories/employees.repository';
import { DeactivateEmployee } from '../../deactivate-employee.command';
export declare class CheckEmployeeExistsOnDeactivate implements ICommandValidator<DeactivateEmployee> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: DeactivateEmployee): Promise<IValidationResult>;
}
