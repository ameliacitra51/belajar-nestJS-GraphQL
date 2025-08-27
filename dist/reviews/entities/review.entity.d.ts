import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Review {
    id: string;
    userId: string;
    courseId: string;
    user: User;
    course: Course;
    rating: number;
    comment: string;
}
