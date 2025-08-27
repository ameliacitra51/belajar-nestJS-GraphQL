import { CreateProgressInput } from './create-progress.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateProgressInput extends PartialType(CreateProgressInput) {
  @Field(() => ID)
  id: string;
}
