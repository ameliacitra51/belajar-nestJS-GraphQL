import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { User } from '../users/entities/user.entity';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Role } from '../common/enum/role.enum';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepo: Repository<Course>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(
    createCourseInput: CreateCourseInput,
    user: User,
  ): Promise<Course> {
    const course = this.courseRepo.create({
      ...createCourseInput,
      instructorId: user.id,
    });

    return this.courseRepo.save(course);
  }

  async findAll(): Promise<Course[]> {
    return this.courseRepo.find({ relations: ['instructor'] });
  }

  async findOne(id: string): Promise<Course> {
    const course = await this.courseRepo.findOne({
      where: { id },
      relations: ['instructor'],
    });
    if (!course) throw new NotFoundException(`Course ${id} not found`);
    return course;
  }

  async update(
    id: string,
    updateCourseInput: UpdateCourseInput,
  ): Promise<Course> {
    const course = await this.findOne(id);
    Object.assign(course, updateCourseInput);
    return this.courseRepo.save(course);
  }

  async remove(id: string): Promise<Course> {
    const course = await this.findOne(id);
    await this.courseRepo.delete(id);
    return course;
  }
}
