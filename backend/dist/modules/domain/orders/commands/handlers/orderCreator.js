"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createOrder_1 = require("../createOrder");
const commands_1 = require("../../../../common/commands");
const orderRepository_1 = require("../../repositories/orderRepository");
const productRepository_1 = require("../../repositories/productRepository");
const order_entity_1 = require("../../entities/order.entity");
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let OrderCreator = class OrderCreator extends commands_1.BaseCommandHandler {
    constructor(orderRepository, productRepository) {
        super();
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = new order_entity_1.Order({ id: uuid_1.v4() });
            yield this.orderRepository.save(order);
            const product = yield this.productRepository.findById(command.productId);
            order.addProduct(product);
            yield this.orderRepository.save(order);
        });
    }
};
OrderCreator = __decorate([
    cqrs_1.CommandHandler(createOrder_1.CreateOrder),
    common_1.Injectable(),
    __metadata("design:paramtypes", [orderRepository_1.OrderRepository,
        productRepository_1.ProductRepository])
], OrderCreator);
exports.OrderCreator = OrderCreator;
//# sourceMappingURL=orderCreator.js.map