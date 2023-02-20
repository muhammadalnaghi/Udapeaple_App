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
const commands_1 = require("../../../../common/commands");
const update_employee_tags_command_1 = require("../update-employee-tags.command");
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const employees_repository_1 = require("../../repositories/employees.repository");
let EmployeeTagsUpdater = class EmployeeTagsUpdater extends commands_1.BaseCommandHandler {
    constructor(employeeRepository) {
        super();
        this.employeeRepository = employeeRepository;
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const { employeeId, tags } = command;
            const employee = yield this.employeeRepository.findById(employeeId);
            employee.tags = tags;
            yield this.employeeRepository.save(employee);
        });
    }
};
EmployeeTagsUpdater = __decorate([
    cqrs_1.CommandHandler(update_employee_tags_command_1.UpdateEmployeeTags),
    common_1.Injectable(),
    __metadata("design:paramtypes", [employees_repository_1.EmployeeRepository])
], EmployeeTagsUpdater);
exports.EmployeeTagsUpdater = EmployeeTagsUpdater;
//# sourceMappingURL=employee-tags-updater.handler.js.map