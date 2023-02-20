"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cqrs_1 = require("@nestjs/cqrs");
const employee_created_event_1 = require("../employee-created.event");
let NotifyEmployeeCreatedConsole = class NotifyEmployeeCreatedConsole {
    handle(event) {
        console.log('Employee created');
    }
};
NotifyEmployeeCreatedConsole = __decorate([
    cqrs_1.EventsHandler(employee_created_event_1.EmployeeCreated)
], NotifyEmployeeCreatedConsole);
exports.NotifyEmployeeCreatedConsole = NotifyEmployeeCreatedConsole;
//# sourceMappingURL=notify-employee-created-console.handler.js.map