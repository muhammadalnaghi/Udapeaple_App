"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_creator_handler_1 = require("./employee-creator.handler");
const employee_updater_handler_1 = require("./employee-updater.handler");
const employee_name_updater_handler_1 = require("./employee-name-updater.handler");
const employee_address_updater_handler_1 = require("./employee-address-updater.handler");
const employee_deactivator_handler_1 = require("./employee-deactivator.handler");
const employee_activator_handler_1 = require("./employee-activator.handler");
const employee_display_name_updater_handler_1 = require("./employee-display-name-updater.handler");
const employee_tags_updater_handler_1 = require("./employee-tags-updater.handler");
const employee_phone_number_updater_handler_1 = require("./employee-phone-number-updater.handler");
const employee_personal_email_updater_handler_1 = require("./employee-personal-email-updater.handler");
const employee_company_email_updater_handler_1 = require("./employee-company-email-updater.handler");
const employee_salary_updater_handler_1 = require("./employee-salary-updater.handler");
const employee_salary_type_updater_handler_1 = require("./employee-salary-type-updater.handler");
const employee_effective_date_updater_handler_1 = require("./employee-effective-date-updater.handler");
const employee_birthdate_updater_handler_1 = require("./employee-birthdate-updater.handler");
exports.CommandHandlers = [
    employee_creator_handler_1.EmployeeCreator,
    employee_updater_handler_1.EmployeeUpdater,
    employee_deactivator_handler_1.EmployeeDeactivator,
    employee_activator_handler_1.EmployeeActivator,
    employee_name_updater_handler_1.EmployeeNameUpdater,
    employee_address_updater_handler_1.EmployeeAddressUpdater,
    employee_display_name_updater_handler_1.EmployeeDisplayNameUpdater,
    employee_tags_updater_handler_1.EmployeeTagsUpdater,
    employee_phone_number_updater_handler_1.EmployeePhoneNumberUpdater,
    employee_personal_email_updater_handler_1.EmployeePersonalEmailUpdater,
    employee_company_email_updater_handler_1.EmployeeCompanyEmailUpdater,
    employee_salary_updater_handler_1.EmployeeSalaryUpdater,
    employee_salary_type_updater_handler_1.EmployeeSalaryTypeUpdater,
    employee_effective_date_updater_handler_1.EmployeeEffectiveDateUpdater,
    employee_birthdate_updater_handler_1.EmployeeBirthDateUpdater
];
//# sourceMappingURL=index.js.map