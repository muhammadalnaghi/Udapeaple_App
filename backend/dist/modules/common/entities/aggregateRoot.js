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
const class_transformer_1 = require("class-transformer");
class AggregateRoot {
    constructor() {
        this.raisedEvents = [];
    }
    apply(event) {
        this.raisedEvents.push(event);
        this.rehydrate(event);
    }
    rehydrate(event) {
        const handler = this.getEventHandler(event);
        handler && handler.call(this, event);
    }
    events() {
        return this.raisedEvents;
    }
    getEventHandler(event) {
        const handler = `on${this.getEventName(event)}`;
        return this[handler];
    }
    getEventName(event) {
        const { constructor } = Object.getPrototypeOf(event);
        return constructor.name;
    }
    loadFromHistory(history) {
        history.forEach(event => this.rehydrate(event));
    }
    publish() {
        return this.raisedEvents.splice(0);
    }
}
__decorate([
    class_transformer_1.Exclude(),
    __metadata("design:type", Array)
], AggregateRoot.prototype, "raisedEvents", void 0);
exports.AggregateRoot = AggregateRoot;
//# sourceMappingURL=aggregateRoot.js.map