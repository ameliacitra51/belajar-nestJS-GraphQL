import { CreateSectionInput } from './create-section.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateSectionInput extends PartialType(CreateSectionInput) {
  @Field(() => ID)
  id: string;
}
