import { ICommand } from '../../../common/commands';
export declare class UpdateEmployee implements ICommand {
    employeeId: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    secondLastName: string;
    displayName?: string;
    companyEmail: string;
    personalEmail?: string;
    birthdate: string;
    address?: string;
    phoneNumber?: string;
    bankName?: string;
    accountNumber?: string;
    tags?: string;
    country: string;
    region: string;
    city: string;
    salary: number;
    effectiveDate: string;
    salaryType: string;
    constructor(employeeId: number, firstName: string, middleName: string, lastName: string, secondLastName: string, displayName: string, companyEmail: string, personalEmail: string, birthdate: string, address: string, phoneNumber: string, bankName: string, accountNumber: string, tags: string, country: string, region: string, city: string, salary: number, effectiveDate: string, salaryType: string);
}
