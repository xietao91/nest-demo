import { Test, TestingModule } from '@nestjs/testing';
import { GirlController } from './girl.controller';

describe('GirlController', () => {
  let controller: GirlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GirlController],
    }).compile();

    controller = module.get<GirlController>(GirlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
