import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Section } from 'src/sections/entities/section.entity';
import { Progress } from 'src/progress/entities/progress.entity';

@ObjectType()
@Entity()
export class Lesson {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  sectionId: string;

  @Field(() => Section)
  @ManyToOne(() => Section, { eager: true })
  @JoinColumn({ name: 'sectionId' })
  section: Section;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column('text')
  content: string;

  @Field()
  @Column({ nullable: true })
  video_url: string;

  @Field()
  @Column({ type: 'int', default: 1 })
  order: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Progress, (progress) => progress.lesson)
  progresses: Progress[];
}
