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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const commands_1 = require("../../common/commands");
const common_1 = require("@nestjs/common");
const createOrder_1 = require("./commands/createOrder");
const orderRepository_1 = require("./repositories/orderRepository");
const passport_1 = require("@nestjs/passport");
const user_decorator_1 = require("../../auth/user.decorator");
let OrdersController = class OrdersController {
    constructor(commandDispatcher, orderRepository) {
        this.commandDispatcher = commandDispatcher;
        this.orderRepository = orderRepository;
    }
    createOrder(user, orderRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(user);
            const createOrder = new createOrder_1.CreateOrder(orderRequest.productId, orderRequest.productQuantity, user.username);
            yield this.commandDispatcher.execute(createOrder);
            return null;
        });
    }
    getOrders(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderRepository
                .where({ id: query.id })
                .relation(query.relations)
                .paginate(query.page, query.perPage);
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, user_decorator_1.Usr()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "createOrder", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrders", null);
OrdersController = __decorate([
    common_1.Controller('/orders'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [commands_1.SyncCommandDispatcher,
        orderRepository_1.OrderRepository])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map