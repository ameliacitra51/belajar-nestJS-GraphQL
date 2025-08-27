import { CreateCategoryDto } from './create-category.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryDto) {
  @Field(() => ID)
  id: string;
}
