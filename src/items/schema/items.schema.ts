import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemsDocument = Items & Document;

@Schema()
export class Items {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  code: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);
