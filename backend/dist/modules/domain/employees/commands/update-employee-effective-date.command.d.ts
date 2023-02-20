import { ICommand } from '../../../common/commands';
export declare class UpdateEmployeeEffectiveDate implements ICommand {
    employeeId: number;
    effectiveDate: string;
    constructor(employeeId: number, effectiveDate: string);
}
