import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Seller extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
