import { SectionsService } from './sections.service';
import { Section } from './entities/section.entity';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
import { User } from 'src/users/entities/user.entity';
export declare class SectionsResolver {
    private readonly sectionsService;
    constructor(sectionsService: SectionsService);
    createSection(createSectionInput: CreateSectionInput, user: User): Promise<Section>;
    findAll(): Promise<Section[]>;
    findOne(id: string): Promise<Section>;
    updateSection(updateSectionInput: UpdateSectionInput): Promise<Section>;
    removeSection(id: string): Promise<Section>;
}
