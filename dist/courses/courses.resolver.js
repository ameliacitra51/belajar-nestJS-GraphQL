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
exports.CoursesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const courses_service_1 = require("./courses.service");
const course_entity_1 = require("./entities/course.entity");
const create_course_input_1 = require("./dto/create-course.input");
const update_course_input_1 = require("./dto/update-course.input");
const common_1 = require("@nestjs/common");
const role_guard_1 = require("../common/guards/role.guard");
const role_decorator_1 = require("../common/decorators/role.decorator");
const role_enum_1 = require("../common/enum/role.enum");
const user_entity_1 = require("../users/entities/user.entity");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const common_2 = require("@nestjs/common");
const gql_auth_guard_1 = require("../common/guards/gql-auth.guard");
let CoursesResolver = class CoursesResolver {
    coursesService;
    constructor(coursesService) {
        this.coursesService = coursesService;
    }
    createCourse(createCourseInput, user) {
        return this.coursesService.create(createCourseInput, user);
    }
    findAll() {
        return this.coursesService.findAll();
    }
    findOne(id) {
        return this.coursesService.findOne(id);
    }
    updateCourse(updateCourseInput) {
        return this.coursesService.update(updateCourseInput.id, updateCourseInput);
    }
    removeCourse(id) {
        return this.coursesService.remove(id);
    }
};
exports.CoursesResolver = CoursesResolver;
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, role_guard_1.RoleGuard),
    (0, graphql_1.Mutation)(() => course_entity_1.Course),
    (0, role_decorator_1.Roles)(role_enum_1.Role.INSTRUCTOR),
    __param(0, (0, graphql_1.Args)('createCourseInput', new common_2.ValidationPipe())),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_input_1.CreateCourseInput,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "createCourse", null);
__decorate([
    (0, graphql_1.Query)(() => [course_entity_1.Course], { name: 'courses' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => course_entity_1.Course, { name: 'course' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, role_guard_1.RoleGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.INSTRUCTOR),
    (0, graphql_1.Mutation)(() => course_entity_1.Course, { name: 'updateCourse' }),
    __param(0, (0, graphql_1.Args)('updateCourseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_course_input_1.UpdateCourseInput]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "updateCourse", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, role_guard_1.RoleGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.INSTRUCTOR),
    (0, graphql_1.Mutation)(() => course_entity_1.Course, { name: 'removeCourse' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "removeCourse", null);
exports.CoursesResolver = CoursesResolver = __decorate([
    (0, graphql_1.Resolver)(() => course_entity_1.Course),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesResolver);
//# sourceMappingURL=courses.resolver.js.map