"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidCommandValidatorException extends Error {
    constructor() {
        super(`Invalid command validation exception. Define command validation using @CommandValidator() decorator`);
    }
}
exports.InvalidCommandValidatorException = InvalidCommandValidatorException;
//# sourceMappingURL=invalidCommandValidatorException.js.map