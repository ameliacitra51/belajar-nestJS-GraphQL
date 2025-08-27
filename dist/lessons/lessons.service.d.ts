import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';
import { Section } from 'src/sections/entities/section.entity';
export declare class LessonsService {
    private lessonRepo;
    private sectionRepo;
    constructor(lessonRepo: Repository<Lesson>, sectionRepo: Repository<Section>);
    create(createLessonInput: CreateLessonInput): Promise<Lesson>;
    findAll(): Promise<Lesson[]>;
    findOne(id: string): Promise<Lesson>;
    update(id: string, updateLessonInput: UpdateLessonInput): Promise<Lesson>;
    remove(id: string): Promise<Lesson>;
}
