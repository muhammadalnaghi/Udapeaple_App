import { CreateOrder } from '../createOrder';
import { BaseCommandHandler } from '../../../../common/commands';
import { OrderRepository } from '../../repositories/orderRepository';
import { ProductRepository } from '../../repositories/productRepository';
export declare class OrderCreator extends BaseCommandHandler<CreateOrder, void> {
    private readonly orderRepository;
    private readonly productRepository;
    constructor(orderRepository: OrderRepository, productRepository: ProductRepository);
    handle(command: CreateOrder): Promise<void>;
}
