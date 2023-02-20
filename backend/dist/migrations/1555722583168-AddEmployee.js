"use strict";
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
class AddEmployee1555722583168 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "firstName" character varying(100) NOT NULL, "middleName" character varying(100), "lastName" character varying(100) NOT NULL, "secondLastName" character varying(100), "displayName" character varying(100), "companyEmail" character varying(50) NOT NULL DEFAULT '', "personalEmail" character varying(50) DEFAULT '', "birthdate" TIMESTAMP, "startDate" TIMESTAMP NOT NULL, "address" character varying(200), "phoneNumber" character varying(100), "bankName" character varying(100), "accountNumber" character varying(100), "gender" character varying, "tags" json NOT NULL DEFAULT '{}', "country" character varying(100) NOT NULL, "region" character varying(100) NOT NULL, "city" character varying(100) NOT NULL, "effectiveDate" TIMESTAMP NOT NULL, "salary" numeric NOT NULL, "salaryType" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "workingHoursPerWeek" integer NOT NULL DEFAULT 40, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_1f9ea0b0e59e0d98ade4f2d5e9" ON "order_products_product" ("orderId") `);
            yield queryRunner.query(`CREATE INDEX "IDX_d6c66c08b9c7e84a1b657797df" ON "order_products_product" ("productId") `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP INDEX "IDX_d6c66c08b9c7e84a1b657797df"`);
            yield queryRunner.query(`DROP INDEX "IDX_1f9ea0b0e59e0d98ade4f2d5e9"`);
            yield queryRunner.query(`DROP TABLE "employee"`);
        });
    }
}
exports.AddEmployee1555722583168 = AddEmployee1555722583168;
//# sourceMappingURL=1555722583168-AddEmployee.js.map