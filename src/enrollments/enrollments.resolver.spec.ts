import { Test, TestingModule } from '@nestjs/testing';
import { EnrollmentsResolver } from './enrollments.resolver';
import { EnrollmentsService } from './enrollments.service';

describe('EnrollmentsResolver', () => {
  let resolver: EnrollmentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrollmentsResolver, EnrollmentsService],
    }).compile();

    resolver = module.get<EnrollmentsResolver>(EnrollmentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
