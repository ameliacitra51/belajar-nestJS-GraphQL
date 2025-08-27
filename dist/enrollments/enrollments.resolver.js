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
exports.EnrollmentsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const enrollments_service_1 = require("./enrollments.service");
const enrollment_entity_1 = require("./entities/enrollment.entity");
const create_enrollment_input_1 = require("./dto/create-enrollment.input");
const update_enrollment_input_1 = require("./dto/update-enrollment.input");
let EnrollmentsResolver = class EnrollmentsResolver {
    enrollmentsService;
    constructor(enrollmentsService) {
        this.enrollmentsService = enrollmentsService;
    }
    createEnrollment(createEnrollmentInput) {
        return this.enrollmentsService.create(createEnrollmentInput);
    }
    findAll() {
        return this.enrollmentsService.findAll();
    }
    findOne(id) {
        return this.enrollmentsService.findOne(id);
    }
    updateEnrollment(updateEnrollmentInput) {
        return this.enrollmentsService.update(updateEnrollmentInput.id, updateEnrollmentInput);
    }
    removeEnrollment(id) {
        return this.enrollmentsService.remove(id);
    }
};
exports.EnrollmentsResolver = EnrollmentsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => enrollment_entity_1.Enrollment),
    __param(0, (0, graphql_1.Args)('createEnrollmentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_enrollment_input_1.CreateEnrollmentInput]),
    __metadata("design:returntype", void 0)
], EnrollmentsResolver.prototype, "createEnrollment", null);
__decorate([
    (0, graphql_1.Query)(() => [enrollment_entity_1.Enrollment], { name: 'enrollments' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnrollmentsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => enrollment_entity_1.Enrollment, { name: 'enrollment' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EnrollmentsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => enrollment_entity_1.Enrollment),
    __param(0, (0, graphql_1.Args)('updateEnrollmentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_enrollment_input_1.UpdateEnrollmentInput]),
    __metadata("design:returntype", void 0)
], EnrollmentsResolver.prototype, "updateEnrollment", null);
__decorate([
    (0, graphql_1.Mutation)(() => enrollment_entity_1.Enrollment),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EnrollmentsResolver.prototype, "removeEnrollment", null);
exports.EnrollmentsResolver = EnrollmentsResolver = __decorate([
    (0, graphql_1.Resolver)(() => enrollment_entity_1.Enrollment),
    __metadata("design:paramtypes", [enrollments_service_1.EnrollmentsService])
], EnrollmentsResolver);
//# sourceMappingURL=enrollments.resolver.js.map