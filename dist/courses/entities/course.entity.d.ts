import { User } from '../../users/entities/user.entity';
import { Section } from 'src/sections/entities/section.entity';
import { Enrollment } from 'src/enrollments/entities/enrollment.entity';
import { Category } from 'src/category/entities/category.entity';
export declare class Course {
    id: string;
    title: string;
    description?: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    instructorId: string;
    instructor: User;
    sections: Section[];
    enrollments: Enrollment[];
    categoryId?: string;
    category: Category;
}
