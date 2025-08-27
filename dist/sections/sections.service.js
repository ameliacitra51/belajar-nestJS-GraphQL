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
exports.SectionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const section_entity_1 = require("./entities/section.entity");
const typeorm_2 = require("typeorm");
const course_entity_1 = require("../courses/entities/course.entity");
let SectionsService = class SectionsService {
    sectionRepo;
    courseRepo;
    constructor(sectionRepo, courseRepo) {
        this.sectionRepo = sectionRepo;
        this.courseRepo = courseRepo;
    }
    async create(createSectionInput, user) {
        const { title, order, courseId } = createSectionInput;
        const course = await this.courseRepo.findOne({
            where: { id: courseId },
            relations: ['instructor'],
        });
        if (!course) {
            throw new Error('Course tidak ditemukan');
        }
        const section = this.sectionRepo.create({
            ...createSectionInput,
            course,
        });
        return this.sectionRepo.save(section);
    }
    async findAll() {
        return this.sectionRepo.find({ relations: ['course'] });
    }
    async findOne(id) {
        const section = await this.sectionRepo.findOne({
            where: { id },
            relations: ['course'],
        });
        if (!section)
            throw new common_1.NotFoundException(`Section ${id} not found`);
        return section;
    }
    async update(id, updateSectionInput) {
        await this.sectionRepo.update(id, updateSectionInput);
        const updated = await this.sectionRepo.findOne({ where: { id } });
        if (!updated)
            throw new common_1.NotFoundException(`Section ${id} not found`);
        return updated;
    }
    async remove(id) {
        const section = await this.findOne(id);
        await this.sectionRepo.delete(id);
        return section;
    }
};
exports.SectionsService = SectionsService;
exports.SectionsService = SectionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(section_entity_1.Section)),
    __param(1, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SectionsService);
//# sourceMappingURL=sections.service.js.map