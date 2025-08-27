import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgressInput } from './dto/create-progress.input';
import { UpdateProgressInput } from './dto/update-progress.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Progress } from './entities/progress.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(Progress)
    private progressRepo: Repository<Progress>,

    @InjectRepository(User)
    private userRepo: Repository<Progress>,

    @InjectRepository(Lesson)
    private lessonRepo: Repository<Lesson>,
  ) {}

  async create(createProgressInput: CreateProgressInput): Promise<Progress> {
    const { userId, lessonId, status } = createProgressInput;

    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException('User tidak ditemukan');

    const lesson = await this.lessonRepo.findOne({ where: { id: lessonId } });
    if (!lesson) throw new NotFoundException('Lesson tidak ditemukan');

    const progress = this.progressRepo.create({
      user,
      lesson,
      status: status ?? 'IN_PROGRESS',
    });

    return this.progressRepo.save(progress);
  }

  async findAll(): Promise<Progress[]> {
    return this.progressRepo.find({ relations: ['user', 'lesson'] });
  }

  async findOne(id: string): Promise<Progress> {
    const progress = await this.progressRepo.findOne({
      where: { id },
      relations: ['user', 'lesson'],
    });

    if (!progress) throw new NotFoundException('Progress tidak ditemukan');
    return progress;
  }

  async update(
    id: string,
    updateProgressInput: UpdateProgressInput,
  ): Promise<Progress> {
    const progress = await this.findOne(id);
    this.progressRepo.merge(progress, updateProgressInput);
    return this.progressRepo.save(progress);
  }

  async remove(id: string): Promise<Progress> {
    const progress = await this.findOne(id);
    await this.progressRepo.delete(id);
    return progress;
  }
}
