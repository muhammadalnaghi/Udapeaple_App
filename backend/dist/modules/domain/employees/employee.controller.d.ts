import { CreateEmployeeRequest } from './requests/create-employee-request.interface';
import { SyncCommandDispatcher } from '../../common/commands';
import { PaginatedEmployeeQuery } from './requests/paginated-employee-query.interface';
import { EmployeeRepository } from './repositories/employees.repository';
import { User } from '../../auth/user.interface';
import { Employee } from './entities/employee.entity';
import { UpdateEmployeeRequest } from './requests/update-employee-request.interface';
export declare class EmployeeController {
    private readonly commandDispatcher;
    private readonly employeeRepository;
    constructor(commandDispatcher: SyncCommandDispatcher, employeeRepository: EmployeeRepository);
    createEmployee(employeeRequest: CreateEmployeeRequest): Promise<Employee>;
    getEmployees(user: User, query: PaginatedEmployeeQuery): Promise<Employee[]>;
    getById(employeeId: number): Promise<Employee>;
    updateEmployee(employeeRequest: UpdateEmployeeRequest): Promise<void>;
    changeNames(employeeId: number, employeeRequest: UpdateEmployeeRequest): Promise<void>;
    changeAddress(employeeId: number, employeeRequest: UpdateEmployeeRequest): Promise<void>;
    changeDisplayName(employeeId: number, employeeRequest: UpdateEmployeeRequest): Promise<void>;
    changeTags(employeeId: number, employeeRequest: UpdateEmployeeRequest): Promise<void>;
    changePhoneNumber(employeeId: number, employeeRequest: UpdateEmployeeRequest): Promise<void>;
    changePersonalEmail(employeeId: number, employeeRequest: UpdateEmployeeRequest): Promise<void>;
    changeCompanyEmail(employeeId: number, employeeRequest: UpdateEmployeeRequest): Promise<void>;
    changeSalary(employeeId: number, employeeRequest: UpdateEmployeeRequest): Promise<void>;
    changeSalaryType(employeeId: number, employeeRequest: UpdateEmployeeRequest): Promise<void>;
    changeEffectiveDate(employeeId: number, employeeRequest: UpdateEmployeeRequest): Promise<void>;
    changeBirthDate(employeeId: number, employeeRequest: UpdateEmployeeRequest): Promise<void>;
    deactivateEmployee(employeeId: number): Promise<void>;
    activateEmployee(employeeId: number): Promise<void>;
}
