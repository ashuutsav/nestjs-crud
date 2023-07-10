import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Author {
  @Prop()
  name: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
