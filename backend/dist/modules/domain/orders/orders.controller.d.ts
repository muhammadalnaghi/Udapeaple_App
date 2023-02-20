import { SyncCommandDispatcher } from '../../common/commands';
import { OrderRequest } from './requests/orderRequest';
import { OrderRepository } from './repositories/orderRepository';
import { PaginatedOrderQuery } from './requests/PaginatedOrderQuery';
import { User } from '../../auth/user.interface';
export declare class OrdersController {
    private readonly commandDispatcher;
    private readonly orderRepository;
    constructor(commandDispatcher: SyncCommandDispatcher, orderRepository: OrderRepository);
    createOrder(user: User, orderRequest: OrderRequest): Promise<any>;
    getOrders(query: PaginatedOrderQuery): Promise<import("../../common").PaginateResult<import("./entities/order.entity").Order>>;
}
