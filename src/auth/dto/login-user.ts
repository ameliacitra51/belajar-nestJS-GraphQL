import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginUser {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  role: string;
}
