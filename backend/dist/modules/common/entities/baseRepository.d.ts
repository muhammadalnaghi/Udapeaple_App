import { DeepPartial, Repository } from 'typeorm';
import { IAggregateRoot } from './aggregateRoot';
import { SyncEventDispatcher } from '../events';
export declare class PaginateResult<TResult> {
    constructor(params?: PaginateResult<TResult>);
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
    data: TResult[];
}
export declare abstract class BaseRepository<TId, TEntity extends IAggregateRoot<TId>> {
    protected repository: Repository<TEntity>;
    private eventDispatcher;
    wheres: DeepPartial<TEntity>[];
    private relations;
    constructor(repository: Repository<TEntity>, eventDispatcher: SyncEventDispatcher);
    save(entity: TEntity): Promise<TEntity>;
    remove(entity: TEntity): Promise<void>;
    findById(id: TId | any): Promise<TEntity>;
    where(where: DeepPartial<TEntity>): BaseRepository<TId, TEntity>;
    relation(relations: string[]): BaseRepository<TId, TEntity>;
    get(): Promise<TEntity[]>;
    private createQueryOptions;
    first(): Promise<TEntity>;
    paginate(page?: number, perPage?: number): Promise<PaginateResult<TEntity>>;
    createWhere(): DeepPartial<TEntity>;
    private createRelations;
}
