import { ICommand } from '../../../common/commands';
export declare class CreateOrder implements ICommand {
    productId: string;
    productQuantity: number;
    userId: string;
    constructor(productId: string, productQuantity: number, userId: string);
}
