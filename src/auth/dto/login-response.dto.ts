import { Field, ObjectType } from '@nestjs/graphql';
import { LoginUser } from './login-user';

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;

  @Field(() => LoginUser)
  user: LoginUser;
}
