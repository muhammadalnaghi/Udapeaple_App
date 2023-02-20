"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../../../../../common/commands/validation");
const joi = require("@hapi/joi");
class CheckPropertiesValue extends validation_1.JoiCommandValidator {
    getSchema(command) {
        return joi.object({
            productId: joi
                .string()
                .uuid({ version: 'uuidv4' })
                .required(),
            productQuantity: joi
                .number()
                .required()
                .min(0),
            userId: joi.string().required(),
        });
    }
}
exports.CheckPropertiesValue = CheckPropertiesValue;
//# sourceMappingURL=checkPropertiesValue.js.map