import { DomainEvent } from '../../../common/events/domainEvent';
export declare class ProductAddedToOrder implements DomainEvent {
    orderId: string;
    productId: string;
    constructor(orderId: string, productId: string);
}
