import { ICommand } from '../../../common/commands';
export declare class UpdateEmployeePersonalEmail implements ICommand {
    employeeId: number;
    personalEmail: string;
    constructor(employeeId: number, personalEmail: string);
}
