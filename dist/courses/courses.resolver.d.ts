import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { User } from 'src/users/entities/user.entity';
export declare class CoursesResolver {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    createCourse(createCourseInput: CreateCourseInput, user: User): Promise<Course>;
    findAll(): Promise<Course[]>;
    findOne(id: string): Promise<Course>;
    updateCourse(updateCourseInput: UpdateCourseInput): Promise<Course>;
    removeCourse(id: string): Promise<Course>;
}
