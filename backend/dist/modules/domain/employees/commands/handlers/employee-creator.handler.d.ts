import { BaseCommandHandler } from '../../../../common/commands';
import { CreateEmployee } from '../create-employee.command';
import { EmployeeRepository } from '../../repositories/employees.repository';
import { Employee } from '../../entities/employee.entity';
export declare class EmployeeCreator extends BaseCommandHandler<CreateEmployee, Employee> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    handle(command: CreateEmployee): Promise<Employee>;
}
