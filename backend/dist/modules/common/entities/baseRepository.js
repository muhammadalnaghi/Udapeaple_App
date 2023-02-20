"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const typeorm_1 = require("typeorm");
const events_1 = require("../events");
const typeorm_2 = require("@nestjs/typeorm");
class PaginateResult {
    constructor(params = {}) {
        const { currentPage, data, lastPage, perPage, total } = params;
        this.currentPage = currentPage;
        this.data = data;
        this.lastPage = lastPage;
        this.perPage = perPage;
        this.total = total;
    }
}
exports.PaginateResult = PaginateResult;
let BaseRepository = class BaseRepository {
    constructor(repository, eventDispatcher) {
        this.repository = repository;
        this.eventDispatcher = eventDispatcher;
        this.wheres = [];
        this.relations = [];
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const entityToSave = entity;
            const recentlySavedEntity = yield this.repository.save(entityToSave);
            const events = entity.publish();
            events.forEach((event) => __awaiter(this, void 0, void 0, function* () { return yield this.eventDispatcher.publish(event); }));
            return recentlySavedEntity;
        });
    }
    remove(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const entityToDelete = entity;
            yield this.repository.remove(entityToDelete);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneOrFail(id);
        });
    }
    where(where) {
        Object.keys(where).forEach(key => where[key] === undefined && delete where[key]);
        this.wheres.push(where);
        return this;
    }
    relation(relations) {
        if (relations)
            this.relations = this.relations.concat(relations);
        return this;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryBuilder = this.repository;
            const queryOptions = this.createQueryOptions();
            return queryBuilder.find(queryOptions);
        });
    }
    createQueryOptions() {
        const where = this.createWhere();
        const relations = this.createRelations();
        return {
            where,
            relations,
        };
    }
    first() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryBuilder = this.repository;
            const queryOptions = this.createQueryOptions();
            return queryBuilder.findOne(queryOptions);
        });
    }
    paginate(page = 1, perPage = 15) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryBuilder = this.repository;
            const queryOptions = this.createQueryOptions();
            const count = yield queryBuilder.count(queryOptions);
            const paginationOptions = Object.assign({ skip: perPage * (page - 1), take: perPage }, queryOptions);
            const data = yield queryBuilder.find(paginationOptions);
            const lastPage = Math.floor(count / perPage) + 1;
            return new PaginateResult({
                total: count,
                perPage,
                data,
                lastPage,
                currentPage: lastPage < page ? lastPage : page,
            });
        });
    }
    createWhere() {
        const wheres = this.wheres.slice();
        this.wheres = [];
        return Object.assign({}, ...wheres);
    }
    createRelations() {
        const relations = this.relations;
        this.relations = [];
        return relations;
    }
};
BaseRepository = __decorate([
    __param(0, typeorm_2.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        events_1.SyncEventDispatcher])
], BaseRepository);
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=baseRepository.js.map