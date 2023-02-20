import { AggregateRoot } from '../../../common/entities';
import { CreateEmployee } from '../commands/create-employee.command';
export declare class Employee extends AggregateRoot<number> {
    constructor(params?: CreateEmployee);
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    secondLastName: string;
    displayName: string;
    companyEmail: string;
    personalEmail: string;
    birthdate: Date;
    startDate: Date;
    address: string;
    phoneNumber: string;
    bankName: string;
    accountNumber: string;
    gender: Gender;
    tags: string;
    country: string;
    region: string;
    city: string;
    effectiveDate: Date;
    salary: number;
    salaryType: SalaryType;
    isActive: boolean;
    workingHoursPerWeek: number;
}
export declare enum Gender {
    MALE = "male",
    FEMALE = "female"
}
export declare enum SalaryType {
    YEARLY = "yearly",
    HOURLY = "hourly"
}
export declare function getDateFromString(date: string): Date;
