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
const moment = require("moment-timezone");
const entities_1 = require("../../../common/entities");
const typeorm_1 = require("typeorm");
let Employee = class Employee extends entities_1.AggregateRoot {
    constructor(params = {}) {
        super();
        if (params) {
            this.accountNumber = params.accountNumber;
            this.address = params.address;
            this.firstName = params.firstName;
            this.gender = getGenderFromEnum(params.gender);
            this.lastName = params.lastName;
            this.middleName = params.middleName;
            this.personalEmail = params.personalEmail;
            this.phoneNumber = params.phoneNumber;
            this.region = params.region;
            this.salary = +params.salary;
            this.salaryType = getSalaryTypeFromEnum(params.salaryType);
            this.secondLastName = params.secondLastName;
            this.startDate = getDateFromString(params.startDate);
            this.tags = params.tags;
            this.city = params.city;
            this.country = params.country;
            this.displayName = params.displayName;
            this.effectiveDate = getDateFromString(params.effectiveDate);
            this.companyEmail = params.companyEmail;
            this.bankName = params.bankName;
            this.birthdate = getDateFromString(params.birthdate);
        }
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Employee.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Employee.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "middleName", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Employee.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "secondLastName", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "displayName", void 0);
__decorate([
    typeorm_1.Column({ length: 50, default: '' }),
    __metadata("design:type", String)
], Employee.prototype, "companyEmail", void 0);
__decorate([
    typeorm_1.Column({ length: 50, nullable: true, default: '' }),
    __metadata("design:type", String)
], Employee.prototype, "personalEmail", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Employee.prototype, "birthdate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Employee.prototype, "startDate", void 0);
__decorate([
    typeorm_1.Column({ length: 200, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "phoneNumber", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "bankName", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "accountNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column({ type: 'json', default: '{}' }),
    __metadata("design:type", String)
], Employee.prototype, "tags", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Employee.prototype, "country", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Employee.prototype, "region", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Employee.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Employee.prototype, "effectiveDate", void 0);
__decorate([
    typeorm_1.Column('decimal'),
    __metadata("design:type", Number)
], Employee.prototype, "salary", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Employee.prototype, "salaryType", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], Employee.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column({ default: 40 }),
    __metadata("design:type", Number)
], Employee.prototype, "workingHoursPerWeek", void 0);
Employee = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Employee);
exports.Employee = Employee;
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender = exports.Gender || (exports.Gender = {}));
var SalaryType;
(function (SalaryType) {
    SalaryType["YEARLY"] = "yearly";
    SalaryType["HOURLY"] = "hourly";
})(SalaryType = exports.SalaryType || (exports.SalaryType = {}));
function getDateFromString(date) {
    return moment(date).format('M/D/YYYY');
}
exports.getDateFromString = getDateFromString;
function getGenderFromEnum(gender) {
    return Gender[Object.keys(Gender).find(key => Gender[key] === gender)];
}
function getSalaryTypeFromEnum(salaryType) {
    return SalaryType[Object.keys(SalaryType).find(key => SalaryType[key] === salaryType)];
}
//# sourceMappingURL=employee.entity.js.map