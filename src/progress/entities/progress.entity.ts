import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Progress {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  userId: string;

  @Field()
  @Column()
  lessonId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.progresses)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Field(() => Lesson)
  @ManyToOne(() => Lesson, (lesson) => lesson.progresses)
  @JoinColumn({ name: 'lessonId' })
  lesson: Lesson;

  @Field()
  @Column({ default: 'IN_PROGRESS' })
  status: string;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
