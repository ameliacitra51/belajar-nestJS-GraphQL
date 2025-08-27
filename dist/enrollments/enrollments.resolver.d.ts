import { EnrollmentsService } from './enrollments.service';
import { Enrollment } from './entities/enrollment.entity';
import { CreateEnrollmentInput } from './dto/create-enrollment.input';
import { UpdateEnrollmentInput } from './dto/update-enrollment.input';
export declare class EnrollmentsResolver {
    private readonly enrollmentsService;
    constructor(enrollmentsService: EnrollmentsService);
    createEnrollment(createEnrollmentInput: CreateEnrollmentInput): Promise<Enrollment>;
    findAll(): Promise<Enrollment[]>;
    findOne(id: string): Promise<Enrollment>;
    updateEnrollment(updateEnrollmentInput: UpdateEnrollmentInput): Promise<Enrollment>;
    removeEnrollment(id: string): Promise<boolean>;
}
