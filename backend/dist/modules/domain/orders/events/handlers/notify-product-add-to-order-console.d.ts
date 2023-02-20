import { IEventHandler } from '../../../../common/events';
import { ProductAddedToOrder } from '../ProductAddedToOrder';
export declare class NotifyProductAddToOrderConsole implements IEventHandler<ProductAddedToOrder> {
    handle(event: ProductAddedToOrder): any;
}
