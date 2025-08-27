import { Course } from '../../courses/entities/course.entity';
export declare class Instructor {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    courses?: Course[];
}
