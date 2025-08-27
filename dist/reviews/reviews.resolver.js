"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const reviews_service_1 = require("./reviews.service");
const review_entity_1 = require("./entities/review.entity");
const create_review_input_1 = require("./dto/create-review.input");
const update_review_input_1 = require("./dto/update-review.input");
let ReviewsResolver = class ReviewsResolver {
    reviewsService;
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
    }
    createReview(createReviewInput) {
        return this.reviewsService.create(createReviewInput);
    }
    findAll() {
        return this.reviewsService.findAll();
    }
    findOne(id) {
        return this.reviewsService.findOne(id);
    }
    updateReview(updateReviewInput) {
        return this.reviewsService.update(updateReviewInput.id, updateReviewInput);
    }
    removeReview(id) {
        return this.reviewsService.remove(id);
    }
};
exports.ReviewsResolver = ReviewsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => review_entity_1.Review),
    __param(0, (0, graphql_1.Args)('createReviewInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_input_1.CreateReviewInput]),
    __metadata("design:returntype", void 0)
], ReviewsResolver.prototype, "createReview", null);
__decorate([
    (0, graphql_1.Query)(() => [review_entity_1.Review], { name: 'reviews' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => review_entity_1.Review, { name: 'review' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => review_entity_1.Review),
    __param(0, (0, graphql_1.Args)('updateReviewInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_review_input_1.UpdateReviewInput]),
    __metadata("design:returntype", void 0)
], ReviewsResolver.prototype, "updateReview", null);
__decorate([
    (0, graphql_1.Mutation)(() => review_entity_1.Review),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewsResolver.prototype, "removeReview", null);
exports.ReviewsResolver = ReviewsResolver = __decorate([
    (0, graphql_1.Resolver)(() => review_entity_1.Review),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], ReviewsResolver);
//# sourceMappingURL=reviews.resolver.js.map