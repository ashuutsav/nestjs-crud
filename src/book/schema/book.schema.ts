import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Author } from 'src/author/schema/author.schema';

export enum Category {
  ADVENTURE = 'Adventure',
  CLASSICS = 'Classics',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
}

@Schema({
  timestamps: true,
})
export class Book {
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
