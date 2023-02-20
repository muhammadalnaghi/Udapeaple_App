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
const moment = require("moment-timezone");
const commands_1 = require("../../../../common/commands");
const update_employee_effective_date_command_1 = require("../update-employee-effective-date.command");
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const employees_repository_1 = require("../../repositories/employees.repository");
let EmployeeEffectiveDateUpdater = class EmployeeEffectiveDateUpdater extends commands_1.BaseCommandHandler {
    constructor(employeeRepository) {
        super();
        this.employeeRepository = employeeRepository;
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const { employeeId, effectiveDate } = command;
            const employee = yield this.employeeRepository.findById(employeeId);
            employee.effectiveDate = moment(effectiveDate)
                .utc()
                .format();
            yield this.employeeRepository.save(employee);
        });
    }
};
EmployeeEffectiveDateUpdater = __decorate([
    cqrs_1.CommandHandler(update_employee_effective_date_command_1.UpdateEmployeeEffectiveDate),
    common_1.Injectable(),
    __metadata("design:paramtypes", [employees_repository_1.EmployeeRepository])
], EmployeeEffectiveDateUpdater);
exports.EmployeeEffectiveDateUpdater = EmployeeEffectiveDateUpdater;
//# sourceMappingURL=employee-effective-date-updater.handler.js.map