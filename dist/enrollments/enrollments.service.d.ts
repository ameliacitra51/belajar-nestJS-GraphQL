import { CreateEnrollmentInput } from './dto/create-enrollment.input';
import { UpdateEnrollmentInput } from './dto/update-enrollment.input';
import { Enrollment } from './entities/enrollment.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Course } from 'src/courses/entities/course.entity';
export declare class EnrollmentsService {
    private enrollmentRepo;
    private userRepo;
    private courseRepo;
    constructor(enrollmentRepo: Repository<Enrollment>, userRepo: Repository<User>, courseRepo: Repository<Course>);
    create(createEnrollmentInput: CreateEnrollmentInput): Promise<Enrollment>;
    findAll(): Promise<Enrollment[]>;
    findOne(id: string): Promise<Enrollment>;
    update(id: string, updateEnrollmentInput: UpdateEnrollmentInput): Promise<Enrollment>;
    remove(id: string): Promise<boolean>;
}
