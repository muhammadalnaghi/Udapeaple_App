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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const commands_1 = require("../../common/commands");
const create_employee_command_1 = require("./commands/create-employee.command");
const update_employee_command_1 = require("./commands/update-employee.command");
const deactivate_employee_command_1 = require("./commands/deactivate-employee.command");
const employees_repository_1 = require("./repositories/employees.repository");
const user_decorator_1 = require("../../auth/user.decorator");
const update_employee_name_command_1 = require("./commands/update-employee-name.command");
const update_employee_address_command_1 = require("./commands/update-employee-address.command");
const update_employee_display_name_command_1 = require("./commands/update-employee-display-name.command");
const update_employee_tags_command_1 = require("./commands/update-employee-tags.command");
const update_employee_phone_number_command_1 = require("./commands/update-employee-phone-number.command");
const update_employee_personal_email_command_1 = require("./commands/update-employee-personal-email.command");
const update_employee_company_email_command_1 = require("./commands/update-employee-company-email.command");
const update_employee_salary_command_1 = require("./commands/update-employee-salary.command");
const update_employee_salary_type_command_1 = require("./commands/update-employee-salary-type.command");
const update_employee_effective_date_command_1 = require("./commands/update-employee-effective-date.command");
const update_employee_birthdate_command_1 = require("./commands/update-employee-birthdate.command");
const activate_employee_command_1 = require("./commands/activate-employee.command");
let EmployeeController = class EmployeeController {
    constructor(commandDispatcher, employeeRepository) {
        this.commandDispatcher = commandDispatcher;
        this.employeeRepository = employeeRepository;
    }
    createEmployee(employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield this.employeeRepository.findByNames(employeeRequest.firstName, employeeRequest.middleName, employeeRequest.lastName, employeeRequest.secondLastName);
            if (typeof employee !== 'undefined') {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.BAD_REQUEST,
                    error: 'Duplicate employee',
                }, common_1.HttpStatus.BAD_REQUEST);
            }
            return yield this.commandDispatcher.execute(new create_employee_command_1.CreateEmployee(employeeRequest.firstName, employeeRequest.middleName, employeeRequest.lastName, employeeRequest.secondLastName, employeeRequest.displayName, employeeRequest.companyEmail, employeeRequest.personalEmail, employeeRequest.birthdate, employeeRequest.startDate, employeeRequest.address, employeeRequest.phoneNumber, employeeRequest.bankName, employeeRequest.accountNumber, employeeRequest.gender, employeeRequest.tags, employeeRequest.country, employeeRequest.region, employeeRequest.city, employeeRequest.salary, employeeRequest.effectiveDate, employeeRequest.salaryType));
        });
    }
    getEmployees(user, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const pageSize = query.pageSize || 10;
            const pageNumber = query.pageNumber || 1;
            const notAllowed = ['pageSize', 'pageNumber'];
            const searchParams = Object.keys(query)
                .filter(key => !notAllowed.includes(key))
                .reduce((obj, key) => {
                obj[key] = query[key];
                return obj;
            }, {});
            const employee = yield this.employeeRepository
                .where(searchParams)
                .paginate(pageNumber, pageSize);
            return employee.data;
        });
    }
    getById(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const respose = yield this.employeeRepository.findById(employeeId);
            return respose;
        });
    }
    updateEmployee(employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_command_1.UpdateEmployee(employeeRequest.employeeId, employeeRequest.firstName, employeeRequest.middleName, employeeRequest.lastName, employeeRequest.secondLastName, employeeRequest.displayName, employeeRequest.companyEmail, employeeRequest.personalEmail, employeeRequest.birthdate, employeeRequest.address, employeeRequest.phoneNumber, employeeRequest.bankName, employeeRequest.accountNumber, employeeRequest.tags, employeeRequest.country, employeeRequest.region, employeeRequest.city, employeeRequest.salary, employeeRequest.effectiveDate, employeeRequest.salaryType));
        });
    }
    changeNames(employeeId, employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_name_command_1.UpdateEmployeeName(employeeId, employeeRequest.firstName, employeeRequest.middleName, employeeRequest.lastName, employeeRequest.secondLastName));
        });
    }
    changeAddress(employeeId, employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_address_command_1.UpdateEmployeeAddress(employeeId, employeeRequest.address, employeeRequest.country, employeeRequest.region, employeeRequest.city));
        });
    }
    changeDisplayName(employeeId, employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_display_name_command_1.UpdateEmployeeDisplayName(employeeId, employeeRequest.displayName));
        });
    }
    changeTags(employeeId, employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_tags_command_1.UpdateEmployeeTags(employeeId, employeeRequest.tags));
        });
    }
    changePhoneNumber(employeeId, employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_phone_number_command_1.UpdateEmployeePhoneNumber(employeeId, employeeRequest.phoneNumber));
        });
    }
    changePersonalEmail(employeeId, employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_personal_email_command_1.UpdateEmployeePersonalEmail(employeeId, employeeRequest.personalEmail));
        });
    }
    changeCompanyEmail(employeeId, employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_company_email_command_1.UpdateEmployeeCompanyEmail(employeeId, employeeRequest.companyEmail));
        });
    }
    changeSalary(employeeId, employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_salary_command_1.UpdateEmployeeSalary(employeeId, employeeRequest.salary));
        });
    }
    changeSalaryType(employeeId, employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_salary_type_command_1.UpdateEmployeeSalaryType(employeeId, employeeRequest.salaryType));
        });
    }
    changeEffectiveDate(employeeId, employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_effective_date_command_1.UpdateEmployeeEffectiveDate(employeeId, employeeRequest.effectiveDate));
        });
    }
    changeBirthDate(employeeId, employeeRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new update_employee_birthdate_command_1.UpdateEmployeeBirthdate(employeeId, employeeRequest.birthdate));
        });
    }
    deactivateEmployee(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new deactivate_employee_command_1.DeactivateEmployee(employeeId, false));
        });
    }
    activateEmployee(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commandDispatcher.execute(new activate_employee_command_1.ActivateEmployee(employeeId, true));
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "createEmployee", null);
__decorate([
    common_1.Get(),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "getEmployees", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "getById", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "updateEmployee", null);
__decorate([
    common_1.Put(':id/names'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "changeNames", null);
__decorate([
    common_1.Put(':id/address'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "changeAddress", null);
__decorate([
    common_1.Put(':id/displayName'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "changeDisplayName", null);
__decorate([
    common_1.Put(':id/tags'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "changeTags", null);
__decorate([
    common_1.Put(':id/phoneNumber'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "changePhoneNumber", null);
__decorate([
    common_1.Put(':id/personalEmail'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "changePersonalEmail", null);
__decorate([
    common_1.Put(':id/companyEmail'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "changeCompanyEmail", null);
__decorate([
    common_1.Put(':id/salary'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "changeSalary", null);
__decorate([
    common_1.Put(':id/salaryType'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "changeSalaryType", null);
__decorate([
    common_1.Put(':id/effectiveDate'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "changeEffectiveDate", null);
__decorate([
    common_1.Put(':id/birthdate'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "changeBirthDate", null);
__decorate([
    common_1.Put(':id/inactive'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "deactivateEmployee", null);
__decorate([
    common_1.Put(':id/active'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "activateEmployee", null);
EmployeeController = __decorate([
    common_1.Controller('/Employees'),
    __metadata("design:paramtypes", [commands_1.SyncCommandDispatcher,
        employees_repository_1.EmployeeRepository])
], EmployeeController);
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=employee.controller.js.map