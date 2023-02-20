import { ICommandValidator, IValidationResult } from '../../../../../common/commands';
import { UpdateEmployeeEffectiveDate } from '../../update-employee-effective-date.command';
import { EmployeeRepository } from '../../../repositories/employees.repository';
export declare class CheckEmployeeEffectiveDateExists implements ICommandValidator<UpdateEmployeeEffectiveDate> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    validate(command: UpdateEmployeeEffectiveDate): Promise<IValidationResult>;
}
