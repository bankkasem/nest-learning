import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNumber,
  Min,
  ValidateNested,
} from 'class-validator';

export class OrderItemDto {
  @IsNumber()
  @Min(0)
  price!: number;

  @IsInt()
  @Min(1)
  quantity!: number;
}

export class CalculateSubtotalDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items!: OrderItemDto[];
}
