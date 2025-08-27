import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsOptional, IsUUID, IsInt } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @Field()
  @IsUUID()
  sectionId: string;

  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  content: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  video_url?: string;

  @Field(() => Int, { defaultValue: 1 })
  @IsOptional()
  @IsInt()
  order?: number;
}
