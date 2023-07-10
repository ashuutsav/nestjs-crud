import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId } from 'mongoose';
import { type } from 'os';
import { Author } from 'src/author/schema/author.schema';

export enum Category {
  ADVENTURE = 'Adventure',
  CLASSICS = 'Classics',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
}

@Schema()
export class Book {
  @Transform(({ value }) => value.toString())
  id: ObjectId;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop({ type: Author })
  authorId: Author;
  @Prop()
  price: number;
  @Prop()
  category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
