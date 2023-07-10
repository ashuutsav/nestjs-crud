import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  isString,
} from 'class-validator';
import { Category } from '../schema/book.schema';
import { Author } from 'src/author/schema/author.schema';

export class updateBookDto {
  @IsString()
  readonly id: string;

  @IsOptional()
  @IsString()
  readonly title: string;
  @IsOptional()
  @IsString()
  readonly description: string;
  @IsOptional()
  @IsNumber()
  readonly authorId: Author;
  @IsOptional()
  @IsNumber()
  readonly price: number;
  @IsOptional()
  @IsEnum(Category, { message: 'Enter correct option' })
  readonly category: Category;
}
