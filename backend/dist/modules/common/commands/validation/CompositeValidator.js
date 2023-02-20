"use strict";
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
class CompositeValidator {
    constructor(validators) {
        this.validators = validators;
    }
    validate(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (const validator of this.validators) {
                const result = yield validator.validate(command);
                if (result.hasError) {
                    results.push(result);
                }
            }
            if (results.length > 0) {
                const errors = results.map(value => value.errors);
                return {
                    hasError: true,
                    errors: [].concat.apply([], errors),
                };
            }
            return {
                hasError: false,
                errors: [],
            };
        });
    }
}
exports.CompositeValidator = CompositeValidator;
//# sourceMappingURL=CompositeValidator.js.map