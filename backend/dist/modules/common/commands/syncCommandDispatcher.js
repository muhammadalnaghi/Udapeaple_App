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
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const constants_1 = require("./constants");
const invalidCommandValidatorException_1 = require("./validation/invalidCommandValidatorException");
let SyncCommandDispatcher = class SyncCommandDispatcher {
    constructor(commandBus) {
        this.commandBus = commandBus;
        this.validators = new Map();
        this.moduleRef = null;
    }
    registerValidators(commandValidators) {
        commandValidators.forEach(validator => this.registerValidator(validator));
    }
    setModuleRef(moduleRef) {
        this.moduleRef = moduleRef;
    }
    execute(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const validator = this.validators.get(this.getCommandName(command));
            if (!validator) {
                throw new invalidCommandValidatorException_1.InvalidCommandValidatorException();
            }
            const result = yield validator.validate(command);
            if (result.hasError) {
                throw new common_1.BadRequestException(result.errors);
            }
            return yield this.commandBus.execute(command);
        });
    }
    registerValidator(validator) {
        if (!this.moduleRef) {
            throw new Error('Invalid module ref');
        }
        const instance = this.moduleRef.get(validator);
        if (!instance)
            return;
        const target = this.reflectCommandName(validator);
        if (target) {
            this.bindValidator(instance, target.name);
        }
    }
    bindValidator(validator, name) {
        this.validators.set(name, validator);
    }
    getCommandName(command) {
        const { constructor } = Object.getPrototypeOf(command);
        return constructor.name;
    }
    reflectCommandName(validator) {
        return Reflect.getMetadata(constants_1.COMMAND_VALIDATOR_METADATA, validator);
    }
};
SyncCommandDispatcher = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], SyncCommandDispatcher);
exports.SyncCommandDispatcher = SyncCommandDispatcher;
//# sourceMappingURL=syncCommandDispatcher.js.map