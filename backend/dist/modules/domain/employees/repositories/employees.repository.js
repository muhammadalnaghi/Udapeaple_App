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
const entities_1 = require("../../../common/entities");
const events_1 = require("../../../common/events");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const employee_entity_1 = require("../entities/employee.entity");
let EmployeeRepository = class EmployeeRepository extends entities_1.BaseRepository {
    constructor(manager, eventDispatcher) {
        super(manager.getRepository(employee_entity_1.Employee), eventDispatcher);
    }
    findByNames(firstName, middleName, lastName, secondLastName) {
        return __awaiter(this, void 0, void 0, function* () {
            const emp = yield this.repository.createQueryBuilder("employee")
                .where("employee.firstName = :firstName AND employee.middleName = :middleName " +
                "AND employee.lastName = :lastName AND employee.secondLastName = :secondLastName", { firstName: firstName, middleName: middleName, lastName: lastName, secondLastName: secondLastName })
                .getOne();
            return emp;
        });
    }
};
EmployeeRepository = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        events_1.SyncEventDispatcher])
], EmployeeRepository);
exports.EmployeeRepository = EmployeeRepository;
//# sourceMappingURL=employees.repository.js.map