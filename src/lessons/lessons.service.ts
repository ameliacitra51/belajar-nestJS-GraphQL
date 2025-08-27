import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';
import { Section } from 'src/sections/entities/section.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepo: Repository<Lesson>,

    @InjectRepository(Section)
    private sectionRepo: Repository<Section>,
  ) {}

  async create(
    createLessonInput: CreateLessonInput,
    // user: User,
  ): Promise<Lesson> {
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

  async findAll(): Promise<Lesson[]> {
    return this.lessonRepo.find({ relations: ['section'] });
  }

  async findOne(id: string): Promise<Lesson> {
    const lesson = await this.lessonRepo.findOne({
      where: { id },
      relations: ['section'],
    });

    if (!lesson) throw new NotFoundException(`Lesson ${id} not found`);
    return lesson;
  }

  async update(
    id: string,
    updateLessonInput: UpdateLessonInput,
  ): Promise<Lesson> {
    await this.lessonRepo.update(id, updateLessonInput);

    const update = await this.lessonRepo.findOne({ where: { id } });
    if (!update) throw new NotFoundException(`Lesson ${id} not found`);

    return update;
  }

  async remove(id: string): Promise<Lesson> {
    const lesson = await this.findOne(id);
    await this.lessonRepo.delete(id);
    return lesson;
  }
}
