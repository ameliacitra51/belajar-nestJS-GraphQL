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
exports.EnrollmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const enrollment_entity_1 = require("./entities/enrollment.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const course_entity_1 = require("../courses/entities/course.entity");
let EnrollmentsService = class EnrollmentsService {
    enrollmentRepo;
    userRepo;
    courseRepo;
    constructor(enrollmentRepo, userRepo, courseRepo) {
        this.enrollmentRepo = enrollmentRepo;
        this.userRepo = userRepo;
        this.courseRepo = courseRepo;
    }
    async create(createEnrollmentInput) {
        const { userId, courseId, status } = createEnrollmentInput;
        const user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException(`User ${userId} tidak ditemukan`);
        const course = await this.courseRepo.findOne({ where: { id: courseId } });
        if (!course)
            throw new common_1.NotFoundException(`Course ${courseId} tidak ditemukan`);
        const enrollment = this.enrollmentRepo.create({
            user,
            course,
            status: status ?? 'ACTIVE',
        });
        return this.enrollmentRepo.save(enrollment);
    }
    async findAll() {
        return this.enrollmentRepo.find({ relations: ['user', 'course'] });
    }
    async findOne(id) {
        const enrollment = await this.enrollmentRepo.findOne({
            where: { id },
            relations: ['user', 'course'],
        });
        if (!enrollment)
            throw new common_1.NotFoundException(`Enrollment ${id} tidak ada`);
        return enrollment;
    }
    async update(id, updateEnrollmentInput) {
        const enrollment = await this.findOne(id);
        this.enrollmentRepo.merge(enrollment, updateEnrollmentInput);
        return this.enrollmentRepo.save(enrollment);
    }
    async remove(id) {
        const result = await this.enrollmentRepo.delete(id);
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Enrollment ${id} tidak ada`);
        return true;
    }
};
exports.EnrollmentsService = EnrollmentsService;
exports.EnrollmentsService = EnrollmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(enrollment_entity_1.Enrollment)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EnrollmentsService);
//# sourceMappingURL=enrollments.service.js.map