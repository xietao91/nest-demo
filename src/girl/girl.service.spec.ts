import { Test, TestingModule } from '@nestjs/testing';
import { GirlService } from './girl.service';

describe('GirlService', () => {
  let service: GirlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GirlService],
    }).compile();

    service = module.get<GirlService>(GirlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
