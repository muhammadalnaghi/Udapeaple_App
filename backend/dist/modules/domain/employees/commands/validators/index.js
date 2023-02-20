"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_employee_composite_validator_1 = require("./forCreateEmployee/create-employee-composite.validator");
const check_properties_value_validator_1 = require("./forCreateEmployee/check-properties-value.validator");
const check_properties_value_validator_2 = require("./forUpdateEmployeeName/check-properties-value.validator");
const check_employee_exists_validator_1 = require("./forUpdateEmployeeName/check-employee-exists.validator");
const check_employee_exists_validator_2 = require("./forDeactivateEmployee/check-employee-exists.validator");
const check_employee_exists_validator_3 = require("./forActivateEmployee/check-employee-exists.validator");
const update_employee_composite_validator_1 = require("./forUpdateEmployeeName/update-employee-composite.validator");
const remove_employee_composite_validator_1 = require("./forDeactivateEmployee/remove-employee-composite.validator");
const activate_employee_composite_validator_1 = require("./forActivateEmployee/activate-employee-composite.validator");
const check_properties_value_validator_3 = require("./forUpdateEmployeeAddress/check-properties-value.validator");
const check_employee_exists_validator_4 = require("./forUpdateEmployeeAddress/check-employee-exists.validator");
const update_employee_composite_validator_2 = require("./forUpdateEmployeeAddress/update-employee-composite.validator");
const check_properties_value_validator_4 = require("./forUpdateEmployeeDisplayName/check-properties-value.validator");
const check_employee_exists_validator_5 = require("./forUpdateEmployeeDisplayName/check-employee-exists.validator");
const update_employee_composite_validator_3 = require("./forUpdateEmployeeDisplayName/update-employee-composite.validator");
const check_properties_value_validator_5 = require("./forUpdateEmployeeTags/check-properties-value.validator");
const check_employee_exists_validator_6 = require("./forUpdateEmployeeTags/check-employee-exists.validator");
const update_employee_composite_validator_4 = require("./forUpdateEmployeeTags/update-employee-composite.validator");
const check_properties_value_validator_6 = require("./forUpdateEmployeePhoneNumber/check-properties-value.validator");
const check_employee_exists_validator_7 = require("./forUpdateEmployeePhoneNumber/check-employee-exists.validator");
const update_employee_composite_validator_5 = require("./forUpdateEmployeePhoneNumber/update-employee-composite.validator");
const check_properties_value_validator_7 = require("./forUpdateEmployeePersonalEmail/check-properties-value.validator");
const check_employee_exists_validator_8 = require("./forUpdateEmployeePersonalEmail/check-employee-exists.validator");
const update_employee_composite_validator_6 = require("./forUpdateEmployeePersonalEmail/update-employee-composite.validator");
const check_properties_value_validator_8 = require("./forUpdateEmployeeCompanyEmail/check-properties-value.validator");
const check_employee_exists_validator_9 = require("./forUpdateEmployeeCompanyEmail/check-employee-exists.validator");
const update_employee_composite_validator_7 = require("./forUpdateEmployeeCompanyEmail/update-employee-composite.validator");
const check_properties_value_validator_9 = require("./forUpdateEmployeeSalary/check-properties-value.validator");
const check_employee_exists_validator_10 = require("./forUpdateEmployeeSalary/check-employee-exists.validator");
const update_employee_composite_validator_8 = require("./forUpdateEmployeeSalary/update-employee-composite.validator");
const check_properties_value_validator_10 = require("./forUpdateEmployeeSalaryType/check-properties-value.validator");
const check_employee_exists_validator_11 = require("./forUpdateEmployeeSalaryType/check-employee-exists.validator");
const update_employee_composite_validator_9 = require("./forUpdateEmployeeSalaryType/update-employee-composite.validator");
const check_properties_value_validator_11 = require("./forUpdateEmployeeEffectiveDate/check-properties-value.validator");
const check_employee_exists_validator_12 = require("./forUpdateEmployeeEffectiveDate/check-employee-exists.validator");
const update_employee_composite_validator_10 = require("./forUpdateEmployeeEffectiveDate/update-employee-composite.validator");
const check_properties_value_validator_12 = require("./forUpdateEmployeeBirthDate/check-properties-value.validator");
const check_employee_exists_validator_13 = require("./forUpdateEmployeeBirthDate/check-employee-exists.validator");
const update_employee_composite_validator_11 = require("./forUpdateEmployeeBirthDate/update-employee-composite.validator");
exports.CommandValidators = [
    check_properties_value_validator_1.CheckPropertiesValue,
    create_employee_composite_validator_1.CreateEmployeeCompositeValidator,
    check_properties_value_validator_2.CheckUpdateNamePropertiesValue,
    check_employee_exists_validator_1.CheckEmployeeNameExists,
    update_employee_composite_validator_1.UpdateEmployeeNameCompositeValidator,
    check_employee_exists_validator_2.CheckEmployeeExistsOnDeactivate,
    remove_employee_composite_validator_1.DeactivateEmployeeCompositeValidator,
    check_properties_value_validator_3.CheckUpdateAddressPropertiesValue,
    check_employee_exists_validator_4.CheckEmployeeAddressExists,
    update_employee_composite_validator_2.UpdateEmployeeAddressCompositeValidator,
    check_properties_value_validator_4.CheckUpdateDisplayNamePropertiesValue,
    check_employee_exists_validator_5.CheckEmployeeDisplayNameExists,
    update_employee_composite_validator_3.UpdateEmployeeDisplayNameCompositeValidator,
    check_properties_value_validator_5.CheckUpdateTagsPropertiesValue,
    check_employee_exists_validator_6.CheckEmployeeTagsExists,
    update_employee_composite_validator_4.UpdateEmployeeTagsCompositeValidator,
    check_properties_value_validator_6.CheckUpdatePhoneNumberPropertiesValue,
    check_employee_exists_validator_7.CheckEmployeePhoneNumberExists,
    update_employee_composite_validator_5.UpdateEmployeePhoneNumberCompositeValidator,
    check_properties_value_validator_7.CheckUpdatePersonalEmailPropertiesValue,
    check_employee_exists_validator_8.CheckEmployeePersonalEmailExists,
    update_employee_composite_validator_6.UpdateEmployeePersonalEmailCompositeValidator,
    check_properties_value_validator_8.CheckUpdateCompanyEmailPropertiesValue,
    check_employee_exists_validator_9.CheckEmployeeCompanyEmailExists,
    update_employee_composite_validator_7.UpdateEmployeeCompanyEmailCompositeValidator,
    check_properties_value_validator_9.CheckUpdateSalaryPropertiesValue,
    check_employee_exists_validator_10.CheckEmployeeSalaryExists,
    update_employee_composite_validator_8.UpdateEmployeeSalaryCompositeValidator,
    check_properties_value_validator_10.CheckUpdateSalaryTypePropertiesValue,
    check_employee_exists_validator_11.CheckEmployeeSalaryTypeExists,
    update_employee_composite_validator_9.UpdateEmployeeSalaryTypeCompositeValidator,
    check_employee_exists_validator_12.CheckEmployeeEffectiveDateExists,
    check_properties_value_validator_11.CheckUpdateEffectiveDatePropertiesValue,
    update_employee_composite_validator_10.UpdateEmployeeEffectiveDateCompositeValidator,
    check_employee_exists_validator_13.CheckEmployeeBirthDateExists,
    check_properties_value_validator_12.CheckUpdateBirthDatePropertiesValue,
    update_employee_composite_validator_11.UpdateEmployeeBirthDateCompositeValidator,
    activate_employee_composite_validator_1.ActivateEmployeeCompositeValidator,
    check_employee_exists_validator_3.CheckEmployeeExistsOnActivate
];
//# sourceMappingURL=index.js.map