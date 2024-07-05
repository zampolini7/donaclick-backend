import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  discountPrice: number;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category: Types.ObjectId;

  @Prop({ type: [String] })
  images: string[];

  @Prop({ type: Types.ObjectId, ref: 'Seller' })
  seller: Types.ObjectId;

  @Prop({ min: 0, max: 5 })
  rating: number;

  @Prop({ type: [{ question: String, answer: String }] })
  questions: { question: string; answer: string }[];

  @Prop({ required: true })
  stock: number;

  @Prop()
  specifications: Map<string, string>;

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
