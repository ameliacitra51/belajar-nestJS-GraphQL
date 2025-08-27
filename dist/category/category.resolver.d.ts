import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
export declare class CategoryResolver {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createCategory(createCategoryInput: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    updateCategory(updateCategoryInput: UpdateCategoryInput): Promise<Category>;
    removeCategory(id: string): Promise<Category>;
}
