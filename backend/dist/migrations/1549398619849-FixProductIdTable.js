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
class FixProductIdTable1549398619849 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "order_products_product" DROP CONSTRAINT "FK_d6c66c08b9c7e84a1b657797dff"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
            yield queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" DROP CONSTRAINT "PK_59f5d41216418eba313ed3c7d7c"`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" ADD CONSTRAINT "PK_1f9ea0b0e59e0d98ade4f2d5e99" PRIMARY KEY ("orderId")`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" DROP COLUMN "productId"`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" ADD "productId" uuid NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" DROP CONSTRAINT "PK_1f9ea0b0e59e0d98ade4f2d5e99"`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" ADD CONSTRAINT "PK_59f5d41216418eba313ed3c7d7c" PRIMARY KEY ("orderId", "productId")`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" ADD CONSTRAINT "FK_d6c66c08b9c7e84a1b657797dff" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "order_products_product" DROP CONSTRAINT "FK_d6c66c08b9c7e84a1b657797dff"`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" DROP CONSTRAINT "PK_59f5d41216418eba313ed3c7d7c"`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" ADD CONSTRAINT "PK_1f9ea0b0e59e0d98ade4f2d5e99" PRIMARY KEY ("orderId")`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" DROP COLUMN "productId"`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" ADD "productId" integer NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" DROP CONSTRAINT "PK_1f9ea0b0e59e0d98ade4f2d5e99"`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" ADD CONSTRAINT "PK_59f5d41216418eba313ed3c7d7c" PRIMARY KEY ("orderId", "productId")`);
            yield queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "id" SERIAL NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")`);
            yield queryRunner.query(`ALTER TABLE "order_products_product" ADD CONSTRAINT "FK_d6c66c08b9c7e84a1b657797dff" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
}
exports.FixProductIdTable1549398619849 = FixProductIdTable1549398619849;
//# sourceMappingURL=1549398619849-FixProductIdTable.js.map