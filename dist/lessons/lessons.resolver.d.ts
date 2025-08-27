import { LessonsService } from './lessons.service';
import { Lesson } from './entities/lesson.entity';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
export declare class LessonsResolver {
    private readonly lessonsService;
    constructor(lessonsService: LessonsService);
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    findAll(): Promise<Lesson[]>;
    findOne(id: string): Promise<Lesson>;
    updateLesson(updateLessonInput: UpdateLessonInput): Promise<Lesson>;
    removeLesson(id: string): Promise<Lesson>;
}
