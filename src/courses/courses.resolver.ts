import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { UseGuards } from '@nestjs/common';
import { RoleGuard } from 'src/common/guards/role.guard';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';
import { User } from 'src/users/entities/user.entity';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { ValidationPipe } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';

@Resolver(() => Course)
export class CoursesResolver {
  constructor(private readonly coursesService: CoursesService) {}

  @UseGuards(GqlAuthGuard, RoleGuard)
  @Mutation(() => Course)
  @Roles(Role.INSTRUCTOR)
  createCourse(
    @Args('createCourseInput', new ValidationPipe())
    createCourseInput: CreateCourseInput,
    @CurrentUser() user: User,
  ) {
    return this.coursesService.create(createCourseInput, user);
  }

  @Query(() => [Course], { name: 'courses' })
  findAll() {
    return this.coursesService.findAll();
  }

  @Query(() => Course, { name: 'course' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.coursesService.findOne(id);
  }

  @UseGuards(GqlAuthGuard, RoleGuard)
  @Roles(Role.INSTRUCTOR)
  @Mutation(() => Course, { name: 'updateCourse' })
  updateCourse(
    @Args('updateCourseInput') updateCourseInput: UpdateCourseInput,
  ) {
    return this.coursesService.update(updateCourseInput.id, updateCourseInput);
  }

  @UseGuards(GqlAuthGuard, RoleGuard)
  @Roles(Role.INSTRUCTOR)
  @Mutation(() => Course, { name: 'removeCourse' })
  removeCourse(@Args('id', { type: () => ID }) id: string) {
    return this.coursesService.remove(id);
  }
}
