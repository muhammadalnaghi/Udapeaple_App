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
class JoiCommandValidator {
    validate(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = this.getSchema(command);
            const valResult = schema.validate(command);
            if (valResult.error) {
                return {
                    hasError: true,
                    errors: valResult.error.details.map(d => ({
                        message: d.message,
                        field: d.context.key,
                        fieldLabel: d.context.label,
                        value: command[d.context.key],
                    })),
                };
            }
            return {
                hasError: false,
                errors: [],
            };
        });
    }
}
exports.JoiCommandValidator = JoiCommandValidator;
//# sourceMappingURL=joiValidator.js.map