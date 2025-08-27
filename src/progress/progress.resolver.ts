import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ProgressService } from './progress.service';
import { Progress } from './entities/progress.entity';
import { CreateProgressInput } from './dto/create-progress.input';
import { UpdateProgressInput } from './dto/update-progress.input';

@Resolver(() => Progress)
export class ProgressResolver {
  constructor(private readonly progressService: ProgressService) {}

  @Mutation(() => Progress)
  createProgress(
    @Args('createProgressInput') createProgressInput: CreateProgressInput,
  ) {
    return this.progressService.create(createProgressInput);
  }

  @Query(() => [Progress], { name: 'progress' })
  findAll() {
    return this.progressService.findAll();
  }

  @Query(() => Progress, { name: 'progress' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.progressService.findOne(id);
  }

  @Mutation(() => Progress)
  updateProgress(
    @Args('updateProgressInput') updateProgressInput: UpdateProgressInput,
  ) {
    return this.progressService.update(
      updateProgressInput.id,
      updateProgressInput,
    );
  }

  @Mutation(() => Progress)
  removeProgress(@Args('id', { type: () => ID }) id: string) {
    return this.progressService.remove(id);
  }
}
