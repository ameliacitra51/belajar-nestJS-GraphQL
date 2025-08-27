import { CreateProgressInput } from './dto/create-progress.input';
import { UpdateProgressInput } from './dto/update-progress.input';
import { Progress } from './entities/progress.entity';
import { Repository } from 'typeorm';
import { Lesson } from 'src/lessons/entities/lesson.entity';
export declare class ProgressService {
    private progressRepo;
    private userRepo;
    private lessonRepo;
    constructor(progressRepo: Repository<Progress>, userRepo: Repository<Progress>, lessonRepo: Repository<Lesson>);
    create(createProgressInput: CreateProgressInput): Promise<Progress>;
    findAll(): Promise<Progress[]>;
    findOne(id: string): Promise<Progress>;
    update(id: string, updateProgressInput: UpdateProgressInput): Promise<Progress>;
    remove(id: string): Promise<Progress>;
}
