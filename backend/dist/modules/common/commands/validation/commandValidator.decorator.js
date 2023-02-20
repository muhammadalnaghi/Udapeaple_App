"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("../constants");
exports.CommandValidator = (command) => {
    return (target) => {
        Reflect.defineMetadata(constants_1.COMMAND_VALIDATOR_METADATA, command, target);
    };
};
//# sourceMappingURL=commandValidator.decorator.js.map