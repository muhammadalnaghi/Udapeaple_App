import { ICommand } from '../../../common/commands';
export declare class UpdateEmployeeName implements ICommand {
    employeeId: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    secondLastName: string;
    constructor(employeeId: number, firstName: string, middleName: string, lastName: string, secondLastName: string);
}
