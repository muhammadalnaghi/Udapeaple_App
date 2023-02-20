"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.Usr = common_1.createParamDecorator((_, req) => {
    return req.user;
});
//# sourceMappingURL=user.decorator.js.map