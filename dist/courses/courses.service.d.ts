import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { User } from '../users/entities/user.entity';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
export declare class CoursesService {
    private courseRepo;
    private userRepo;
    constructor(courseRepo: Repository<Course>, userRepo: Repository<User>);
    create(createCourseInput: CreateCourseInput, user: User): Promise<Course>;
    findAll(): Promise<Course[]>;
    findOne(id: string): Promise<Course>;
    update(id: string, updateCourseInput: UpdateCourseInput): Promise<Course>;
    remove(id: string): Promise<Course>;
}
