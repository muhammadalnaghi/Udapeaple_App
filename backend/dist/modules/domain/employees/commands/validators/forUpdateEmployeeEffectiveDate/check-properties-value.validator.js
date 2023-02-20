"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../../../../../common/commands/validation");
const joi = require("@hapi/joi");
class CheckUpdateEffectiveDatePropertiesValue extends validation_1.JoiCommandValidator {
    getSchema(command) {
        return joi.object({
            employeeId: joi.number().required(),
            effectiveDate: joi
                .string()
                .isoDate()
                .required(),
        });
    }
}
exports.CheckUpdateEffectiveDatePropertiesValue = CheckUpdateEffectiveDatePropertiesValue;
//# sourceMappingURL=check-properties-value.validator.js.map