"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../../../../../common/commands/validation");
const joi = require("@hapi/joi");
class CheckUpdateNamePropertiesValue extends validation_1.JoiCommandValidator {
    getSchema(command) {
        return joi.object({
            employeeId: joi.number().required(),
            firstName: joi.string().required(),
            middleName: joi
                .string()
                .allow('')
                .optional(),
            lastName: joi.string().required(),
            secondLastName: joi
                .string()
                .allow('')
                .optional()
        });
    }
}
exports.CheckUpdateNamePropertiesValue = CheckUpdateNamePropertiesValue;
//# sourceMappingURL=check-properties-value.validator.js.map