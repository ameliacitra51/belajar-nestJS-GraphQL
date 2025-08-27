import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsIn } from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsIn(['admin', 'student', 'instructor'])
  role?: 'admin' | 'student' | 'instructor';
}
