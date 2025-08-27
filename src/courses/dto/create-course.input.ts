import { InputType, Field, Float, ID } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

@InputType()
export class CreateCourseInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @Field(() => Float)
  @IsNumber()
  @Min(0)
  price: number;

  // @Field(() => ID)
  // @IsNotEmpty()
  // instructorId: string;
}
