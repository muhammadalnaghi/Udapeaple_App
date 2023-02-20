import { BaseRepository } from '../../../common/entities';
import { SyncEventDispatcher } from '../../../common/events';
import { EntityManager } from 'typeorm';
import { Employee } from '../entities/employee.entity';
export declare class EmployeeRepository extends BaseRepository<number, Employee> {
    constructor(manager: EntityManager, eventDispatcher: SyncEventDispatcher);
    findByNames(firstName: any, middleName: any, lastName: any, secondLastName: any): Promise<Employee>;
}
