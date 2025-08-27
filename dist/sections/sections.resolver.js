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
exports.SectionsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const sections_service_1 = require("./sections.service");
const section_entity_1 = require("./entities/section.entity");
const create_section_input_1 = require("./dto/create-section.input");
const update_section_input_1 = require("./dto/update-section.input");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../common/guards/gql-auth.guard");
const role_guard_1 = require("../common/guards/role.guard");
const role_decorator_1 = require("../common/decorators/role.decorator");
const role_enum_1 = require("../common/enum/role.enum");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
let SectionsResolver = class SectionsResolver {
    sectionsService;
    constructor(sectionsService) {
        this.sectionsService = sectionsService;
    }
    createSection(createSectionInput, user) {
        return this.sectionsService.create(createSectionInput, user);
    }
    findAll() {
        return this.sectionsService.findAll();
    }
    findOne(id) {
        return this.sectionsService.findOne(id);
    }
    updateSection(updateSectionInput) {
        return this.sectionsService.update(updateSectionInput.id, updateSectionInput);
    }
    removeSection(id) {
        return this.sectionsService.remove(id);
    }
};
exports.SectionsResolver = SectionsResolver;
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, role_guard_1.RoleGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.INSTRUCTOR),
    (0, graphql_1.Mutation)(() => section_entity_1.Section),
    __param(0, (0, graphql_1.Args)('createSectionInput')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_section_input_1.CreateSectionInput,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "createSection", null);
__decorate([
    (0, graphql_1.Query)(() => [section_entity_1.Section], { name: 'sections' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => section_entity_1.Section, { name: 'section' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, role_guard_1.RoleGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.INSTRUCTOR),
    (0, graphql_1.Mutation)(() => section_entity_1.Section),
    __param(0, (0, graphql_1.Args)('updateSectionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_section_input_1.UpdateSectionInput]),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "updateSection", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, role_guard_1.RoleGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.INSTRUCTOR),
    (0, graphql_1.Mutation)(() => section_entity_1.Section),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "removeSection", null);
exports.SectionsResolver = SectionsResolver = __decorate([
    (0, graphql_1.Resolver)(() => section_entity_1.Section),
    __metadata("design:paramtypes", [sections_service_1.SectionsService])
], SectionsResolver);
//# sourceMappingURL=sections.resolver.js.map