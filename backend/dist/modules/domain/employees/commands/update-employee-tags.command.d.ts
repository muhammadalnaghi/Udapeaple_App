import { ICommand } from '../../../common/commands';
export declare class UpdateEmployeeTags implements ICommand {
    employeeId: number;
    tags: string;
    constructor(employeeId: number, tags: string);
}
