import { ICommand } from '../../../common/commands';
export declare class UpdateEmployeeAddress implements ICommand {
    employeeId: number;
    address?: string;
    country: string;
    region: string;
    city: string;
    constructor(employeeId: number, address: string, country: string, region: string, city: string);
}
