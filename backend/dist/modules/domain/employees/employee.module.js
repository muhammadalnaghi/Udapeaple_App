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
const common_1 = require("@nestjs/common");
const handlers_1 = require("./commands/handlers");
const handlers_2 = require("./events/handlers");
const common_2 = require("../../common");
const common_3 = require("../../common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../../auth/auth.module");
const app_logger_1 = require("../../app/app.logger");
const core_1 = require("@nestjs/core");
const employees_repository_1 = require("./repositories/employees.repository");
const employee_controller_1 = require("./employee.controller");
const employee_entity_1 = require("./entities/employee.entity");
const validators_1 = require("./commands/validators");
const passport_1 = require("@nestjs/passport");
let EmployeeModule = class EmployeeModule {
    constructor(moduleRef, command$) {
        this.moduleRef = moduleRef;
        this.command$ = command$;
    }
    onModuleInit() {
        this.command$.setModuleRef(this.moduleRef);
        this.command$.registerValidators(validators_1.CommandValidators);
    }
};
EmployeeModule = __decorate([
    common_1.Module({
        imports: [common_2.CommonModule, typeorm_1.TypeOrmModule.forFeature([employee_entity_1.Employee]), auth_module_1.AuthModule, passport_1.PassportModule.register({ defaultStrategy: 'jwt' })],
        controllers: [employee_controller_1.EmployeeController],
        providers: [
            employees_repository_1.EmployeeRepository,
            ...handlers_1.CommandHandlers,
            ...handlers_2.EventHandlers,
            ...validators_1.CommandValidators,
            app_logger_1.AppLogger,
        ],
    }),
    __metadata("design:paramtypes", [core_1.ModuleRef,
        common_3.SyncCommandDispatcher])
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map