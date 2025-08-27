import { InputType, Int, Field } from '@nestjs/graphql';
import { IsUUID, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateProgressInput {
  @Field()
  @IsUUID()
  userId: string;

  @Field()
  @IsUUID()
  lessonId: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  status?: string;
}
