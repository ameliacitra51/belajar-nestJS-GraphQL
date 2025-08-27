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
exports.ProgressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const progress_entity_1 = require("./entities/progress.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const lesson_entity_1 = require("../lessons/entities/lesson.entity");
let ProgressService = class ProgressService {
    progressRepo;
    userRepo;
    lessonRepo;
    constructor(progressRepo, userRepo, lessonRepo) {
        this.progressRepo = progressRepo;
        this.userRepo = userRepo;
        this.lessonRepo = lessonRepo;
    }
    async create(createProgressInput) {
        const { userId, lessonId, status } = createProgressInput;
        const user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('User tidak ditemukan');
        const lesson = await this.lessonRepo.findOne({ where: { id: lessonId } });
        if (!lesson)
            throw new common_1.NotFoundException('Lesson tidak ditemukan');
        const progress = this.progressRepo.create({
            user,
            lesson,
            status: status ?? 'IN_PROGRESS',
        });
        return this.progressRepo.save(progress);
    }
    async findAll() {
        return this.progressRepo.find({ relations: ['user', 'lesson'] });
    }
    async findOne(id) {
        const progress = await this.progressRepo.findOne({
            where: { id },
            relations: ['user', 'lesson'],
        });
        if (!progress)
            throw new common_1.NotFoundException('Progress tidak ditemukan');
        return progress;
    }
    async update(id, updateProgressInput) {
        const progress = await this.findOne(id);
        this.progressRepo.merge(progress, updateProgressInput);
        return this.progressRepo.save(progress);
    }
    async remove(id) {
        const progress = await this.findOne(id);
        await this.progressRepo.delete(id);
        return progress;
    }
};
exports.ProgressService = ProgressService;
exports.ProgressService = ProgressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(progress_entity_1.Progress)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(lesson_entity_1.Lesson)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProgressService);
//# sourceMappingURL=progress.service.js.map