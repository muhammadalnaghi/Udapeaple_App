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
const commands_1 = require("./commands");
const events_1 = require("./events");
const cqrs_1 = require("@nestjs/cqrs");
const validationExplorer_1 = require("./commands/validation/validationExplorer");
let CommonModule = class CommonModule {
    constructor() { }
    onModuleInit() { }
};
CommonModule = __decorate([
    common_1.Module({
        imports: [cqrs_1.CqrsModule],
        providers: [commands_1.SyncCommandDispatcher, events_1.SyncEventDispatcher, validationExplorer_1.ValidationExplorer],
        exports: [commands_1.SyncCommandDispatcher, events_1.SyncEventDispatcher],
    }),
    __metadata("design:paramtypes", [])
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map