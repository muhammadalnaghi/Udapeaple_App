import { ICommand } from '../../../common/commands';
export declare class UpdateEmployeeSalaryType implements ICommand {
    employeeId: number;
    salaryType: string;
    constructor(employeeId: number, salaryType: string);
}
