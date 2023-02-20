import { EventBus } from '@nestjs/cqrs';
import { DomainEvent } from './domainEvent';
import { IEventDispatcher } from './eventDispatcher';
import { Type } from '@nestjs/common';
import { IEventHandler } from './eventHandler';
export declare type EventHandlerMetatype = Type<IEventHandler<DomainEvent>>;
export declare class SyncEventDispatcher implements IEventDispatcher {
    private eventBus;
    constructor(eventBus: EventBus);
    publish<TEvent extends DomainEvent>(event: TEvent): Promise<void>;
    register(handlers: EventHandlerMetatype[]): void;
}
