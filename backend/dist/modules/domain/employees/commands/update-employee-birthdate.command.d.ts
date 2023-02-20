import { ICommand } from '../../../common/commands';
export declare class UpdateEmployeeBirthdate implements ICommand {
    employeeId: number;
    birthdate: string;
    constructor(employeeId: number, birthdate: string);
}
