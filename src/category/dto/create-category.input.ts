import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCategoryDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;
}
