import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller.js';
import { OrdersService } from './orders.service.js';

describe('OrdersController', () => {
  let controller: OrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService],
    }).compile();

    controller = module.get(OrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return subtotal of 250', () => {
    expect(controller.getSubtotal()).toBe(250);
  });

  it('should calculate subtotal from supplied items', () => {
    expect(
      controller.calculateSubtotal({
        items: [
          { price: 30, quantity: 3 },
          { price: 20, quantity: 2 },
        ],
      }),
    ).toBe(130);
  });
});
