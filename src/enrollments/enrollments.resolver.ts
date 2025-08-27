import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { EnrollmentsService } from './enrollments.service';
import { Enrollment } from './entities/enrollment.entity';
import { CreateEnrollmentInput } from './dto/create-enrollment.input';
import { UpdateEnrollmentInput } from './dto/update-enrollment.input';

@Resolver(() => Enrollment)
export class EnrollmentsResolver {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @Mutation(() => Enrollment)
  createEnrollment(
    @Args('createEnrollmentInput') createEnrollmentInput: CreateEnrollmentInput,
  ) {
    return this.enrollmentsService.create(createEnrollmentInput);
  }

  @Query(() => [Enrollment], { name: 'enrollments' })
  findAll() {
    return this.enrollmentsService.findAll();
  }

  @Query(() => Enrollment, { name: 'enrollment' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.enrollmentsService.findOne(id);
  }

  @Mutation(() => Enrollment)
  updateEnrollment(
    @Args('updateEnrollmentInput') updateEnrollmentInput: UpdateEnrollmentInput,
  ) {
    return this.enrollmentsService.update(
      updateEnrollmentInput.id,
      updateEnrollmentInput,
    );
  }

  @Mutation(() => Enrollment)
  removeEnrollment(@Args('id', { type: () => ID }) id: string) {
    return this.enrollmentsService.remove(id);
  }
}
