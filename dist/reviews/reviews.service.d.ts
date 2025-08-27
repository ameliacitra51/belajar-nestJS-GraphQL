import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
export declare class ReviewsService {
    private reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    create(createReviewInput: CreateReviewInput): Promise<Review>;
    findAll(): Promise<Review[]>;
    findOne(id: string): Promise<Review>;
    update(id: string, updateReviewInput: UpdateReviewInput): Promise<Review>;
    remove(id: string): Promise<Review>;
}
