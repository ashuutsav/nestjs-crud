import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './schema/author.schema';
import { AddAuthorDto } from './dto/addAuthor.dto';
//   import { BookService } from './book.service';
//   import { Book } from './schema/book.schema';
//   import { CreateBookDto } from './dto/createBook.dto';
//   import { updateBookDto } from './dto/updateBook.dto';

@Controller('authors')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Get()
  async getAllAuthors(): Promise<Author[]> {
    return this.authorService.findAll();
  }

  @Post()
  async addAuthor(
    @Body()
    author: AddAuthorDto,
  ): Promise<Author> {
    return this.authorService.create(author);
  }

  @Get(':id')
  async getAuthor(
    @Param('id')
    id: number,
  ): Promise<Author> {
    try {
      return this.authorService.findById(id);
    } catch (err) {
      throw err;
    }
  }

  @Put(':id')
  async updateBook(
    @Param('id')
    id: number,
    @Body()
    author: AddAuthorDto,
  ): Promise<Author> {
    if (!Author) {
      throw new NotFoundException('Book not found');
    }
    return this.authorService.updateById(id, author);
  }

  @Delete(':id')
  async deleteAuthor(
    @Param('id')
    id: number,
  ): Promise<Author> {
    if (!Author) {
      throw new NotFoundException('Book not found');
    }
    return this.authorService.deleteById(id);
  }
}
