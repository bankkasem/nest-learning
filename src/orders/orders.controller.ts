import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service.js';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('subtotal')
  getSubtotal(): number {
    return this.ordersService.getSubtotal([
      { price: 100, quantity: 2 },
      { price: 50, quantity: 1 },
    ]);
  }
}
