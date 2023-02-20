import { ICommand } from '../../../common/commands';
export declare class UpdateEmployeeDisplayName implements ICommand {
    employeeId: number;
    displayName: string;
    constructor(employeeId: number, displayName: string);
}
