import { Role } from '../../common/enum/role.enum';
import { Course } from 'src/courses/entities/course.entity';
import { Enrollment } from 'src/enrollments/entities/enrollment.entity';
import { Progress } from 'src/progress/entities/progress.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
    courses: Course[];
    enrollments: Enrollment[];
    progresses: Progress[];
}
