import { CreateCategoryDto } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    create(createCategoryInput: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    update(id: string, updateCategoryInput: UpdateCategoryInput): Promise<Category>;
    remove(id: string): Promise<Category>;
}
