import { BaseRepository } from '../../../common/entities';
import { Order } from '../entities/order.entity';
import { EntityManager } from 'typeorm';
import { SyncEventDispatcher } from '../../../common/events';
export declare class OrderRepository extends BaseRepository<string, Order> {
    constructor(manager: EntityManager, eventDispatcher: SyncEventDispatcher);
}
