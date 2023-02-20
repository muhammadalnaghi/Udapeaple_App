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
const validation_1 = require("../../../../../common/commands/validation");
const createOrder_1 = require("../../createOrder");
const CompositeValidator_1 = require("../../../../../common/commands/validation/CompositeValidator");
const checkPropertiesValue_1 = require("./checkPropertiesValue");
const checkProductExist_1 = require("./checkProductExist");
let CreateOrderCompositeValidator = class CreateOrderCompositeValidator extends CompositeValidator_1.CompositeValidator {
    constructor(joiValidator, productValidator) {
        super([joiValidator, productValidator]);
    }
};
CreateOrderCompositeValidator = __decorate([
    validation_1.CommandValidator(createOrder_1.CreateOrder),
    __metadata("design:paramtypes", [checkPropertiesValue_1.CheckPropertiesValue,
        checkProductExist_1.CheckProductExist])
], CreateOrderCompositeValidator);
exports.CreateOrderCompositeValidator = CreateOrderCompositeValidator;
//# sourceMappingURL=createOrderCompositeValidator.js.map