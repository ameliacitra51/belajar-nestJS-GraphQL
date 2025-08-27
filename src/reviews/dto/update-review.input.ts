import { CreateReviewInput } from './create-review.input';
import { InputType, Field, PartialType, ID, Int } from '@nestjs/graphql';
import { IsUUID, IsString, IsOptional } from 'class-validator';

@InputType()
export class UpdateReviewInput extends PartialType(CreateReviewInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => Int, { nullable: true })
  rating?: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  comment?: string;
}
