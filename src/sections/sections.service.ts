import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from './entities/section.entity';
import { Repository } from 'typeorm';
import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SectionsService {
  constructor(
    @InjectRepository(Section)
    private sectionRepo: Repository<Section>,

    @InjectRepository(Course)
    private courseRepo: Repository<Course>,
  ) {}

  async create(
    createSectionInput: CreateSectionInput,
    user: User,
  ): Promise<Section> {
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

  async findAll(): Promise<Section[]> {
    return this.sectionRepo.find({ relations: ['course'] });
  }

  async findOne(id: string): Promise<Section> {
    const section = await this.sectionRepo.findOne({
      where: { id },
      relations: ['course'],
    });

    if (!section) throw new NotFoundException(`Section ${id} not found`);
    return section;
  }

  async update(
    id: string,
    updateSectionInput: UpdateSectionInput,
  ): Promise<Section> {
    await this.sectionRepo.update(id, updateSectionInput);

    const updated = await this.sectionRepo.findOne({ where: { id } });
    if (!updated) throw new NotFoundException(`Section ${id} not found`);

    return updated;
  }

  async remove(id: string): Promise<Section> {
    const section = await this.findOne(id);
    await this.sectionRepo.delete(id);
    return section;
  }
}
