import { ICommandValidator, IValidationResult } from '../../../../../common/commands/validation';
import { CreateOrder } from '../../createOrder';
import { ProductRepository } from '../../../repositories/productRepository';
export declare class CheckProductExist implements ICommandValidator<CreateOrder> {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    validate(command: CreateOrder): Promise<IValidationResult>;
}
