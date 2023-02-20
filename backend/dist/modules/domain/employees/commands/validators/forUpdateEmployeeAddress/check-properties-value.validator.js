"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../../../../../common/commands/validation");
const joi = require("@hapi/joi");
class CheckUpdateAddressPropertiesValue extends validation_1.JoiCommandValidator {
    getSchema(command) {
        return joi.object({
            employeeId: joi.number().required(),
            address: joi.string().allow('').optional(),
            country: joi
                .string()
                .required(),
            city: joi.string().required(),
            region: joi.string().required()
        });
    }
}
exports.CheckUpdateAddressPropertiesValue = CheckUpdateAddressPropertiesValue;
//# sourceMappingURL=check-properties-value.validator.js.map