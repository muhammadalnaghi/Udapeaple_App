"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../../../../../common/commands/validation");
const joi = require("@hapi/joi");
class CheckUpdateSalaryPropertiesValue extends validation_1.JoiCommandValidator {
    getSchema(command) {
        return joi.object({
            employeeId: joi.number().required(),
            salary: joi.number().required()
        });
    }
}
exports.CheckUpdateSalaryPropertiesValue = CheckUpdateSalaryPropertiesValue;
//# sourceMappingURL=check-properties-value.validator.js.map