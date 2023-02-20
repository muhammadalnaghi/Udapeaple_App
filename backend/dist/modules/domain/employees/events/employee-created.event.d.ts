import { DomainEvent } from '../../../common/events/domainEvent';
export declare class EmployeeCreated implements DomainEvent {
    employeeId: number;
    firstName: string;
    constructor(employeeId: number, firstName: string);
}
