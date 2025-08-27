import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateSectionInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Field()
  @IsNumber()
  order: number;

  @Field(() => ID)
  @IsNotEmpty()
  courseId: string;
}
