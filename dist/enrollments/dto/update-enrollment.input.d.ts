import { CreateEnrollmentInput } from './create-enrollment.input';
declare const UpdateEnrollmentInput_base: import("@nestjs/common").Type<Partial<CreateEnrollmentInput>>;
export declare class UpdateEnrollmentInput extends UpdateEnrollmentInput_base {
    id: string;
    status?: string;
}
export {};
