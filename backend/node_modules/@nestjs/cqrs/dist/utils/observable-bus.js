"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class ObservableBus extends rxjs_1.Observable {
    constructor() {
        super();
        this.subject$ = new rxjs_1.Subject();
        this.source = this.subject$;
    }
}
exports.ObservableBus = ObservableBus;
