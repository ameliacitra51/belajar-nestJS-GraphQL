import { Lesson } from 'src/lessons/entities/lesson.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Progress {
    id: string;
    userId: string;
    lessonId: string;
    user: User;
    lesson: Lesson;
    status: string;
    updatedAt: Date;
}
