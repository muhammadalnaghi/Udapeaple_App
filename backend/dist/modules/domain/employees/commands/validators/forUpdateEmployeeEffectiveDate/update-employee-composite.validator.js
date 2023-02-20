"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../../../../../common/commands/validation");
const CompositeValidator_1 = require("../../../../../common/commands/validation/CompositeValidator");
const update_employee_effective_date_command_1 = require("../../update-employee-effective-date.command");
const check_employee_exists_validator_1 = require("./check-employee-exists.validator");
const check_properties_value_validator_1 = require("./check-properties-value.validator");
let UpdateEmployeeEffectiveDateCompositeValidator = class UpdateEmployeeEffectiveDateCompositeValidator extends CompositeValidator_1.CompositeValidator {
    constructor(joiValidator, checkEmployeeExists) {
        super([joiValidator, checkEmployeeExists]);
    }
};
UpdateEmployeeEffectiveDateCompositeValidator = __decorate([
    validation_1.CommandValidator(update_employee_effective_date_command_1.UpdateEmployeeEffectiveDate),
    __metadata("design:paramtypes", [check_properties_value_validator_1.CheckUpdateEffectiveDatePropertiesValue,
        check_employee_exists_validator_1.CheckEmployeeEffectiveDateExists])
], UpdateEmployeeEffectiveDateCompositeValidator);
exports.UpdateEmployeeEffectiveDateCompositeValidator = UpdateEmployeeEffectiveDateCompositeValidator;
//# sourceMappingURL=update-employee-composite.validator.js.map