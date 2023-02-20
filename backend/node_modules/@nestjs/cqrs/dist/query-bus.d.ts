import { Type } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import 'reflect-metadata';
import { IQuery, IQueryBus, IQueryHandler, IQueryResult } from './interfaces';
import { ObservableBus } from './utils/observable-bus';
export declare type QueryHandlerType = Type<IQueryHandler<IQuery, IQueryResult>>;
export declare class QueryBus extends ObservableBus<IQuery> implements IQueryBus {
    private readonly moduleRef;
    private handlers;
    constructor(moduleRef: ModuleRef);
    execute<T extends IQuery, TResult extends IQueryResult>(query: T): Promise<TResult>;
    bind<T extends IQuery, TResult>(handler: IQueryHandler<T, TResult>, name: string): void;
    register(handlers?: QueryHandlerType[]): void;
    protected registerHandler(handler: QueryHandlerType): void;
    private getQueryName;
    private reflectQueryName;
}
