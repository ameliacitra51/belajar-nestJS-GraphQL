import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  STUDENT = 'student',
  ADMIN = 'admin',
  INSTRUCTOR = 'instructor',
}

registerEnumType(Role, {
  name: 'Role',
});
