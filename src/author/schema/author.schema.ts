import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Author {
  @Prop()
  id: string;
  @Prop()
  name: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
