import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnrollmentInput } from './dto/create-enrollment.input';
import { UpdateEnrollmentInput } from './dto/update-enrollment.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from './entities/enrollment.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Course } from 'src/courses/entities/course.entity';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectRepository(Enrollment)
    private enrollmentRepo: Repository<Enrollment>,

    @InjectRepository(User)
    private userRepo: Repository<User>,

    @InjectRepository(Course)
    private courseRepo: Repository<Course>,
  ) {}

  async create(
    createEnrollmentInput: CreateEnrollmentInput,
  ): Promise<Enrollment> {
    const { userId, courseId, status } = createEnrollmentInput;

    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException(`User ${userId} tidak ditemukan`);

    const course = await this.courseRepo.findOne({ where: { id: courseId } });
    if (!course)
      throw new NotFoundException(`Course ${courseId} tidak ditemukan`);

    const enrollment = this.enrollmentRepo.create({
      user,
      course,
      status: status ?? 'ACTIVE',
    });

    return this.enrollmentRepo.save(enrollment);
  }

  async findAll(): Promise<Enrollment[]> {
    return this.enrollmentRepo.find({ relations: ['user', 'course'] });
  }

  async findOne(id: string): Promise<Enrollment> {
    const enrollment = await this.enrollmentRepo.findOne({
      where: { id },
      relations: ['user', 'course'],
    });

    if (!enrollment) throw new NotFoundException(`Enrollment ${id} tidak ada`);
    return enrollment;
  }

  async update(
    id: string,
    updateEnrollmentInput: UpdateEnrollmentInput,
  ): Promise<Enrollment> {
    const enrollment = await this.findOne(id);
    this.enrollmentRepo.merge(enrollment, updateEnrollmentInput);
    return this.enrollmentRepo.save(enrollment);
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.enrollmentRepo.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Enrollment ${id} tidak ada`);
    return true;
  }
}
