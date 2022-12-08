import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Items, ItemsSchema } from './schema/items.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Items.name,
        schema: ItemsSchema,
      },
    ]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
