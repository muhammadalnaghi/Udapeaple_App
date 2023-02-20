import { ICommand } from '../../../common/commands';
export declare class UpdateEmployeePhoneNumber implements ICommand {
    employeeId: number;
    phoneNumber: string;
    constructor(employeeId: number, phoneNumber: string);
}
