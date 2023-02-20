"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidQueryHandlerException extends Error {
    constructor() {
        super(`Invalid query handler exception (missing @QueryHandler() decorator?)`);
    }
}
exports.InvalidQueryHandlerException = InvalidQueryHandlerException;
