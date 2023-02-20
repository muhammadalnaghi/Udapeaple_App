import { Order } from './order.entity';
import { AggregateRoot } from '../../../common/entities';
export declare class Product extends AggregateRoot<string> {
    id: string;
    description: string;
    order: Order[];
}
