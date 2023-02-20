import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { EmployeeRepository } from '../../../repositories/employees.repository';
import { ActivateEmployee } from '../../activate-employee.command';
export declare class CheckEmployeeExistsOnActivate implements ICommandValidator<ActivateEmployee> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: ActivateEmployee): Promise<IValidationResult>;
}
