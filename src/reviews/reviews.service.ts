// src/reviews/reviews.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  // Create Review
  async create(createReviewInput: CreateReviewInput): Promise<Review> {
    const review = this.reviewRepository.create(createReviewInput);
    return this.reviewRepository.save(review);
  }

  // Get all reviews
  async findAll(): Promise<Review[]> {
    return this.reviewRepository.find({
      relations: ['user', 'course'], // kalau mau langsung ambil relasi
    });
  }

  // Get review by id
  async findOne(id: string): Promise<Review> {
    const review = await this.reviewRepository.findOne({
      where: { id },
      relations: ['user', 'course'],
    });
    if (!review) {
      throw new NotFoundException(`Review dengan id ${id} tidak ditemukan`);
    }
    return review;
  }

  // Update Review
  async update(
    id: string,
    updateReviewInput: UpdateReviewInput,
  ): Promise<Review> {
    const review = await this.findOne(id);
    Object.assign(review, updateReviewInput);
    return this.reviewRepository.save(review);
  }

  // Delete Review
  async remove(id: string): Promise<Review> {
    const review = await this.findOne(id);
    await this.reviewRepository.remove(review);
    return review;
  }
}
