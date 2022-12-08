import { PartialType } from '@nestjs/mapped-types';
import { IsAlphanumeric, IsNotEmpty } from 'class-validator';
import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsAlphanumeric()
  code: string;
}
