import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { LessonsService } from './lessons.service';
import { Lesson } from './entities/lesson.entity';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';
import { RoleGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';

@Resolver(() => Lesson)
export class LessonsResolver {
  constructor(private readonly lessonsService: LessonsService) {}

  @UseGuards(GqlAuthGuard, RoleGuard)
  @Roles(Role.INSTRUCTOR)
  @Mutation(() => Lesson)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonsService.create(createLessonInput);
  }

  @Query(() => [Lesson], { name: 'lessons' })
  findAll() {
    return this.lessonsService.findAll();
  }

  @Query(() => Lesson, { name: 'lesson' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.lessonsService.findOne(id);
  }

  @Mutation(() => Lesson)
  updateLesson(
    @Args('updateLessonInput') updateLessonInput: UpdateLessonInput,
  ) {
    return this.lessonsService.update(updateLessonInput.id, updateLessonInput);
  }

  @Mutation(() => Lesson)
  removeLesson(@Args('id', { type: () => ID }) id: string) {
    return this.lessonsService.remove(id);
  }
}
