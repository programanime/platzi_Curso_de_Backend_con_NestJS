import { Test, TestingModule } from '@nestjs/testing';
import { BrandsnestController } from './brandsnest.controller';

describe('BrandsnestController', () => {
  let controller: BrandsnestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandsnestController],
    }).compile();

    controller = module.get<BrandsnestController>(BrandsnestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
