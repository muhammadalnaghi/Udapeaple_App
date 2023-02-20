import { ICommand } from '../../../common/commands';
export declare class ActivateEmployee implements ICommand {
    employeeId: number;
    isActive: boolean;
    constructor(employeeId: number, isActive: boolean);
}
