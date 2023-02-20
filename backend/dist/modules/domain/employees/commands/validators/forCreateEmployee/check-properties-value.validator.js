"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../../../../../common/commands/validation");
const joi = require("@hapi/joi");
class CheckPropertiesValue extends validation_1.JoiCommandValidator {
    getSchema(command) {
        return joi.object({
            firstName: joi.string().required(),
            middleName: joi
                .string()
                .allow('')
                .optional(),
            lastName: joi.string().required(),
            secondLastName: joi
                .string()
                .allow('')
                .optional(),
            displayName: joi
                .string()
                .allow('')
                .optional(),
            companyEmail: joi
                .string()
                .email()
                .required(),
            personalEmail: joi
                .string()
                .allow('')
                .email()
                .optional(),
            birthdate: joi
                .string()
                .isoDate()
                .required(),
            startDate: joi
                .string()
                .isoDate()
                .required(),
            address: joi
                .string()
                .allow('')
                .optional(),
            phoneNumber: joi
                .string()
                .allow('')
                .optional(),
            bankName: joi
                .string()
                .allow('')
                .optional(),
            accountNumber: joi
                .string()
                .allow('')
                .optional(),
            gender: joi.string().required(),
            tags: joi
                .string()
                .allow('')
                .optional(),
            country: joi.string().required(),
            region: joi.string().required(),
            city: joi.string().required(),
            salary: joi
                .string()
                .regex(/^\d+$/)
                .required(),
            effectiveDate: joi
                .string()
                .isoDate()
                .required(),
            salaryType: joi.string().required(),
        });
    }
}
exports.CheckPropertiesValue = CheckPropertiesValue;
//# sourceMappingURL=check-properties-value.validator.js.map