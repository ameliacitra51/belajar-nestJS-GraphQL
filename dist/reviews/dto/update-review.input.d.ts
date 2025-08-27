import { CreateReviewInput } from './create-review.input';
declare const UpdateReviewInput_base: import("@nestjs/common").Type<Partial<CreateReviewInput>>;
export declare class UpdateReviewInput extends UpdateReviewInput_base {
    id: string;
    rating?: number;
    comment?: string;
}
export {};
