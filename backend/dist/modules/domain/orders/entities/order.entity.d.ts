import { Product } from './product.entity';
import { AggregateRoot } from '../../../common/entities';
export declare class Order extends AggregateRoot<string> {
    constructor(params?: {
        id: string;
        products?: Product[];
    });
    id: string;
    products: Product[];
    addProduct(product: Product): void;
    getProducts(): Product[];
}
