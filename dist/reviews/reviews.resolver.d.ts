import { ReviewsService } from './reviews.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
export declare class ReviewsResolver {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    createReview(createReviewInput: CreateReviewInput): Promise<Review>;
    findAll(): Promise<Review[]>;
    findOne(id: string): Promise<Review>;
    updateReview(updateReviewInput: UpdateReviewInput): Promise<Review>;
    removeReview(id: string): Promise<Review>;
}
