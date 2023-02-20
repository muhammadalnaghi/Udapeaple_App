"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../../../../../common/commands/validation");
const joi = require("@hapi/joi");
class CheckUpdateTagsPropertiesValue extends validation_1.JoiCommandValidator {
    getSchema(command) {
        return joi.object({
            employeeId: joi.number().required(),
            tags: joi.string().allow('').optional(),
        });
    }
}
exports.CheckUpdateTagsPropertiesValue = CheckUpdateTagsPropertiesValue;
//# sourceMappingURL=check-properties-value.validator.js.map