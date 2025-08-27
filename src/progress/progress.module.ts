import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ProgressResolver } from './progress.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { Progress } from './entities/progress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Progress, User, Lesson])],
  providers: [ProgressResolver, ProgressService],
  exports: [ProgressService],
})
export class ProgressModule {}
