"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../../../../../common/commands/validation");
const joi = require("@hapi/joi");
class CheckUpdateCompanyEmailPropertiesValue extends validation_1.JoiCommandValidator {
    getSchema(command) {
        return joi.object({
            employeeId: joi.number().required(),
            companyEmail: joi.string().required(),
        });
    }
}
exports.CheckUpdateCompanyEmailPropertiesValue = CheckUpdateCompanyEmailPropertiesValue;
//# sourceMappingURL=check-properties-value.validator.js.map