import { BaseRepository } from '../../../common/entities';
import { Product } from '../entities/product.entity';
import { SyncEventDispatcher } from '../../../common/events';
import { EntityManager } from 'typeorm';
export declare class ProductRepository extends BaseRepository<string, Product> {
    constructor(manager: EntityManager, eventDispatcher: SyncEventDispatcher);
}
