import { CreateOrderCompositeValidator } from './forCreateOrder/createOrderCompositeValidator';
import { CheckProductExist } from './forCreateOrder/checkProductExist';
import { CheckPropertiesValue } from './forCreateOrder/checkPropertiesValue';
export declare const CommandValidators: (typeof CheckPropertiesValue | typeof CheckProductExist | typeof CreateOrderCompositeValidator)[];
