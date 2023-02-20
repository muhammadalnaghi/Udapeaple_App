import { ICommand } from '../../../common/commands';
export declare class DeactivateEmployee implements ICommand {
    employeeId: number;
    isActive: boolean;
    constructor(employeeId: number, isActive: boolean);
}
