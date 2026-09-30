import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CalculateSubtotalDto } from './dto/calculate-subtotal.dto.js';
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

  @Post('subtotal')
  @HttpCode(200)
  calculateSubtotal(@Body() body: CalculateSubtotalDto): number {
    return this.ordersService.getSubtotal(body.items);
  }
}
