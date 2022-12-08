import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items, ItemsDocument } from './schema/items.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Items.name) private itemsModule: Model<ItemsDocument>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    return await this.itemsModule.create(createItemDto);
  }

  async findAll() {
    return await this.itemsModule.find({});
  }

  async findOne(id: string) {
    return await this.itemsModule.findOne({ _id: id });
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    return await this.itemsModule.updateOne({ _id: id }, updateItemDto);
  }

  async remove(id: string) {
    return await this.itemsModule.deleteOne({ _id: id });
  }
}
