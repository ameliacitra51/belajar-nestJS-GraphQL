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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const progress_service_1 = require("./progress.service");
const progress_entity_1 = require("./entities/progress.entity");
const create_progress_input_1 = require("./dto/create-progress.input");
const update_progress_input_1 = require("./dto/update-progress.input");
let ProgressResolver = class ProgressResolver {
    progressService;
    constructor(progressService) {
        this.progressService = progressService;
    }
    createProgress(createProgressInput) {
        return this.progressService.create(createProgressInput);
    }
    findAll() {
        return this.progressService.findAll();
    }
    findOne(id) {
        return this.progressService.findOne(id);
    }
    updateProgress(updateProgressInput) {
        return this.progressService.update(updateProgressInput.id, updateProgressInput);
    }
    removeProgress(id) {
        return this.progressService.remove(id);
    }
};
exports.ProgressResolver = ProgressResolver;
__decorate([
    (0, graphql_1.Mutation)(() => progress_entity_1.Progress),
    __param(0, (0, graphql_1.Args)('createProgressInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_progress_input_1.CreateProgressInput]),
    __metadata("design:returntype", void 0)
], ProgressResolver.prototype, "createProgress", null);
__decorate([
    (0, graphql_1.Query)(() => [progress_entity_1.Progress], { name: 'progress' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProgressResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => progress_entity_1.Progress, { name: 'progress' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProgressResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => progress_entity_1.Progress),
    __param(0, (0, graphql_1.Args)('updateProgressInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_progress_input_1.UpdateProgressInput]),
    __metadata("design:returntype", void 0)
], ProgressResolver.prototype, "updateProgress", null);
__decorate([
    (0, graphql_1.Mutation)(() => progress_entity_1.Progress),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProgressResolver.prototype, "removeProgress", null);
exports.ProgressResolver = ProgressResolver = __decorate([
    (0, graphql_1.Resolver)(() => progress_entity_1.Progress),
    __metadata("design:paramtypes", [progress_service_1.ProgressService])
], ProgressResolver);
//# sourceMappingURL=progress.resolver.js.map