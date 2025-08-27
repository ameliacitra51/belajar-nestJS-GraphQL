import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsResolver } from './lessons.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Section } from 'src/sections/entities/section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Section])],
  providers: [LessonsResolver, LessonsService],
  exports: [LessonsService],
})
export class LessonsModule {}
