import { ICommand } from '../../../common/commands';
export declare class UpdateEmployeeSalary implements ICommand {
    employeeId: number;
    salary: number;
    constructor(employeeId: number, salary: number);
}
