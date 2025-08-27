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
exports.LessonsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lesson_entity_1 = require("./entities/lesson.entity");
const typeorm_2 = require("typeorm");
const section_entity_1 = require("../sections/entities/section.entity");
let LessonsService = class LessonsService {
    lessonRepo;
    sectionRepo;
    constructor(lessonRepo, sectionRepo) {
        this.lessonRepo = lessonRepo;
        this.sectionRepo = sectionRepo;
    }
    async create(createLessonInput) {
        const { title, content, video_url, order, sectionId } = createLessonInput;
        const section = await this.sectionRepo.findOne({
            where: { id: sectionId },
            relations: ['course', 'course.instructor'],
        });
        if (!section) {
            throw new Error('Section tidak ditemukan');
        }
        const lesson = this.lessonRepo.create({
            ...createLessonInput,
            section,
        });
        return this.lessonRepo.save(lesson);
    }
    async findAll() {
        return this.lessonRepo.find({ relations: ['section'] });
    }
    async findOne(id) {
        const lesson = await this.lessonRepo.findOne({
            where: { id },
            relations: ['section'],
        });
        if (!lesson)
            throw new common_1.NotFoundException(`Lesson ${id} not found`);
        return lesson;
    }
    async update(id, updateLessonInput) {
        await this.lessonRepo.update(id, updateLessonInput);
        const update = await this.lessonRepo.findOne({ where: { id } });
        if (!update)
            throw new common_1.NotFoundException(`Lesson ${id} not found`);
        return update;
    }
    async remove(id) {
        const lesson = await this.findOne(id);
        await this.lessonRepo.delete(id);
        return lesson;
    }
};
exports.LessonsService = LessonsService;
exports.LessonsService = LessonsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lesson_entity_1.Lesson)),
    __param(1, (0, typeorm_1.InjectRepository)(section_entity_1.Section)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LessonsService);
//# sourceMappingURL=lessons.service.js.map