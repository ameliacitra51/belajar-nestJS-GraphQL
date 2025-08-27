import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
import { Section } from './entities/section.entity';
import { Repository } from 'typeorm';
import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/users/entities/user.entity';
export declare class SectionsService {
    private sectionRepo;
    private courseRepo;
    constructor(sectionRepo: Repository<Section>, courseRepo: Repository<Course>);
    create(createSectionInput: CreateSectionInput, user: User): Promise<Section>;
    findAll(): Promise<Section[]>;
    findOne(id: string): Promise<Section>;
    update(id: string, updateSectionInput: UpdateSectionInput): Promise<Section>;
    remove(id: string): Promise<Section>;
}
