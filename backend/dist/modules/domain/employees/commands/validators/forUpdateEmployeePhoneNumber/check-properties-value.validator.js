"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../../../../../common/commands/validation");
const joi = require("@hapi/joi");
class CheckUpdatePhoneNumberPropertiesValue extends validation_1.JoiCommandValidator {
    getSchema(command) {
        return joi.object({
            employeeId: joi.number().required(),
            phoneNumber: joi.string().allow('').optional(),
        });
    }
}
exports.CheckUpdatePhoneNumberPropertiesValue = CheckUpdatePhoneNumberPropertiesValue;
//# sourceMappingURL=check-properties-value.validator.js.map