import { Injectable } from '@nestjs/common';

type Item = {
  price: number;
  quantity: number;
};

@Injectable()
export class OrdersService {
  getSubtotal(items: Item[]): number {
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    return subtotal;
  }
}
