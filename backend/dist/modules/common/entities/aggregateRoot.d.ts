import { DomainEvent } from '../events/domainEvent';
export interface IAggregateRoot<TId> {
    id: TId;
    apply(event: DomainEvent): void;
    events(): DomainEvent[];
    publish(): DomainEvent[];
}
export declare abstract class AggregateRoot<TId> implements IAggregateRoot<TId> {
    private raisedEvents;
    apply(event: DomainEvent): void;
    private rehydrate;
    events(): DomainEvent[];
    abstract id: TId;
    private getEventHandler;
    private getEventName;
    loadFromHistory(history: DomainEvent[]): void;
    publish(): DomainEvent[];
}
