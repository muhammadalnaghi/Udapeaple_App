import { ICommand } from '../../../common/commands';
export declare class CreateEmployee implements ICommand {
    firstName: string;
    middleName?: string;
    lastName: string;
    secondLastName: string;
    displayName?: string;
    companyEmail: string;
    personalEmail?: string;
    birthdate: string;
    startDate: string;
    address?: string;
    phoneNumber?: string;
    bankName?: string;
    accountNumber?: string;
    gender: string;
    tags?: string;
    country: string;
    region: string;
    city: string;
    salary: string;
    effectiveDate: string;
    salaryType: string;
    constructor(firstName: string, middleName: string, lastName: string, secondLastName: string, displayName: string, companyEmail: string, personalEmail: string, birthdate: string, startDate: string, address: string, phoneNumber: string, bankName: string, accountNumber: string, gender: string, tags: string, country: string, region: string, city: string, salary: string, effectiveDate: string, salaryType: string);
}
