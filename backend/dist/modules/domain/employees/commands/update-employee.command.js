"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateEmployee {
    constructor(employeeId, firstName, middleName, lastName, secondLastName, displayName, companyEmail, personalEmail, birthdate, address, phoneNumber, bankName, accountNumber, tags, country, region, city, salary, effectiveDate, salaryType) {
        this.employeeId = employeeId;
        this.accountNumber = accountNumber;
        this.address = address;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.personalEmail = personalEmail;
        this.phoneNumber = phoneNumber;
        this.region = region;
        this.salary = salary;
        this.salaryType = salaryType;
        this.secondLastName = secondLastName;
        this.tags = tags;
        this.city = city;
        this.country = country;
        this.displayName = displayName;
        this.effectiveDate = effectiveDate;
        this.companyEmail = companyEmail;
        this.bankName = bankName;
        this.birthdate = birthdate;
    }
}
exports.UpdateEmployee = UpdateEmployee;
//# sourceMappingURL=update-employee.command.js.map