import { ICommand } from '../../../common/commands';
export declare class UpdateEmployeeCompanyEmail implements ICommand {
    employeeId: number;
    companyEmail: string;
    constructor(employeeId: number, companyEmail: string);
}
