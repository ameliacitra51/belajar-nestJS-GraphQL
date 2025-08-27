import { Course } from 'src/courses/entities/course.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';
export declare class Section {
    id: string;
    title: string;
    order: number;
    courseId: string;
    course: Course;
    createdAt: Date;
    updatedAt: Date;
    lessons: Lesson[];
}
