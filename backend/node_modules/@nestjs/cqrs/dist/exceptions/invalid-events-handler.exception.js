"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidEventsHandlerException extends Error {
    constructor() {
        super(`Invalid event handler exception (missing @EventsHandler() decorator?)`);
    }
}
exports.InvalidEventsHandlerException = InvalidEventsHandlerException;
