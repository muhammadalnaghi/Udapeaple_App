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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const handlers_1 = require("./commands/handlers");
const common_2 = require("../../common");
const handlers_2 = require("./events/handlers");
const core_1 = require("@nestjs/core");
const app_logger_1 = require("../../app/app.logger");
const productRepository_1 = require("./repositories/productRepository");
const orderRepository_1 = require("./repositories/orderRepository");
const typeorm_1 = require("@nestjs/typeorm");
const orders_controller_1 = require("./orders.controller");
const order_entity_1 = require("./entities/order.entity");
const product_entity_1 = require("./entities/product.entity");
const commands_1 = require("../../common/commands");
const validators_1 = require("./commands/validators");
const auth_module_1 = require("../../auth/auth.module");
const passport_1 = require("@nestjs/passport");
let OrdersModule = class OrdersModule {
    constructor(moduleRef, command$) {
        this.moduleRef = moduleRef;
        this.command$ = command$;
    }
    onModuleInit() {
        this.command$.setModuleRef(this.moduleRef);
        this.command$.registerValidators(validators_1.CommandValidators);
    }
};
OrdersModule = __decorate([
    common_1.Module({
        imports: [
            common_2.CommonModule,
            typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product, order_entity_1.Order]),
            auth_module_1.AuthModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' })
        ],
        controllers: [orders_controller_1.OrdersController],
        providers: [
            productRepository_1.ProductRepository,
            orderRepository_1.OrderRepository,
            ...handlers_1.CommandHandlers,
            ...handlers_2.EventHandlers,
            ...validators_1.CommandValidators,
            app_logger_1.AppLogger,
        ],
    }),
    __metadata("design:paramtypes", [core_1.ModuleRef,
        commands_1.SyncCommandDispatcher])
], OrdersModule);
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map