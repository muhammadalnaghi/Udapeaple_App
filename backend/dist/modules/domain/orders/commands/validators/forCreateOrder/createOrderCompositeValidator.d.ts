import { CreateOrder } from '../../createOrder';
import { CompositeValidator } from '../../../../../common/commands/validation/CompositeValidator';
import { CheckPropertiesValue } from './checkPropertiesValue';
import { CheckProductExist } from './checkProductExist';
export declare class CreateOrderCompositeValidator extends CompositeValidator<CreateOrder> {
    constructor(joiValidator: CheckPropertiesValue, productValidator: CheckProductExist);
}
