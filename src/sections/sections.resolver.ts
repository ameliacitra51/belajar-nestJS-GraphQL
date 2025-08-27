import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { SectionsService } from './sections.service';
import { Section } from './entities/section.entity';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';
import { RoleGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from 'src/common/enum/role.enum';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => Section)
export class SectionsResolver {
  constructor(private readonly sectionsService: SectionsService) {}

  @UseGuards(GqlAuthGuard, RoleGuard)
  @Roles(Role.INSTRUCTOR)
  @Mutation(() => Section)
  createSection(
    @Args('createSectionInput') createSectionInput: CreateSectionInput,
    @CurrentUser() user: User,
  ) {
    return this.sectionsService.create(createSectionInput, user);
  }

  @Query(() => [Section], { name: 'sections' })
  findAll() {
    return this.sectionsService.findAll();
  }

  @Query(() => Section, { name: 'section' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.sectionsService.findOne(id);
  }

  @UseGuards(GqlAuthGuard, RoleGuard)
  @Roles(Role.INSTRUCTOR)
  @Mutation(() => Section)
  updateSection(
    @Args('updateSectionInput') updateSectionInput: UpdateSectionInput,
  ) {
    return this.sectionsService.update(
      updateSectionInput.id,
      updateSectionInput,
    );
  }

  @UseGuards(GqlAuthGuard, RoleGuard)
  @Roles(Role.INSTRUCTOR)
  @Mutation(() => Section)
  removeSection(@Args('id', { type: () => ID }) id: string) {
    return this.sectionsService.remove(id);
  }
}
