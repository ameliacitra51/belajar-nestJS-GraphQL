import { User } from 'src/users/entities/user.entity';
import { Course } from 'src/courses/entities/course.entity';
export declare class Enrollment {
    id: string;
    userId: string;
    courseId: string;
    user: User;
    course: Course;
    status: string;
}
