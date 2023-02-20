"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../../../../../common/commands/validation");
const joi = require("@hapi/joi");
class CheckUpdatePersonalEmailPropertiesValue extends validation_1.JoiCommandValidator {
    getSchema(command) {
        return joi.object({
            employeeId: joi.number().required(),
            personalEmail: joi.string().allow('').optional(),
        });
    }
}
exports.CheckUpdatePersonalEmailPropertiesValue = CheckUpdatePersonalEmailPropertiesValue;
//# sourceMappingURL=check-properties-value.validator.js.map