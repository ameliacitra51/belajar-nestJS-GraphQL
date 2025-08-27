import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Course } from 'src/courses/entities/course.entity';

@ObjectType()
@Entity()
export class Enrollment {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  userId: string;

  @Field()
  @Column()
  courseId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.enrollments)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Field(() => Course)
  @ManyToOne(() => Course, (course) => course.enrollments)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Field()
  @Column({ default: 'ACTIVE' })
  status: string;
}
