import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Role } from 'src/common/enum/role.enum';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field(() => Role, { nullable: true })
  @IsOptional()
  role?: Role;
}
