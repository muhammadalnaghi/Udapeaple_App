import { IEventHandler } from '../../../../common/events';
import { EmployeeCreated } from '../employee-created.event';
export declare class NotifyEmployeeCreatedConsole implements IEventHandler<EmployeeCreated> {
    handle(event: EmployeeCreated): any;
}
