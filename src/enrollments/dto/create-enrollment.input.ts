import { InputType, Int, Field } from '@nestjs/graphql';
import { IsUUID, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateEnrollmentInput {
  @Field()
  @IsUUID()
  userId: string;

  @Field()
  @IsUUID()
  courseId: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  status?: string;
}
