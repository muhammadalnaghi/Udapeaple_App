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
const product_entity_1 = require("./product.entity");
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../common/entities");
const ProductAddedToOrder_1 = require("../events/ProductAddedToOrder");
let Order = class Order extends entities_1.AggregateRoot {
    constructor(params = {}) {
        super();
        const { id, products } = params;
        this.id = id;
        this.products = products;
    }
    addProduct(product) {
        if (!this.products)
            this.products = [];
        this.products.push(product);
        this.apply(new ProductAddedToOrder_1.ProductAddedToOrder(this.id, product.id));
    }
    getProducts() {
        return this.products;
    }
};
__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToMany(type => product_entity_1.Product),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
Order = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map