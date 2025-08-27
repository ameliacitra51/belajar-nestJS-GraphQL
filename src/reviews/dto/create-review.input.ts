import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateReviewInput {
  @Field()
  @IsUUID()
  userId: string;

  @Field()
  @IsUUID()
  courseId: string;

  @Field(() => Int)
  rating: number;

  @Field()
  @IsString()
  comment: string;
}
