import { Subject } from 'rxjs';
import { IEvent, IEventPublisher, IMessageSource } from '../interfaces';
export declare class DefaultPubSub implements IEventPublisher, IMessageSource {
    private subject$;
    publish<T extends IEvent>(event: T): void;
    bridgeEventsTo<T extends IEvent>(subject: Subject<T>): void;
}
