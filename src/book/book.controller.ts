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
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/createBook.dto';
import { updateBookDto } from './dto/updateBook.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async createBook(
    @Body()
    book: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.create(book);
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    try {
      return this.bookService.findById(id);
    } catch (err) {
      throw err;
    }
  }

  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: updateBookDto,
  ): Promise<Book> {
    if (!Book) {
      throw new NotFoundException('Book not found');
    }
    return this.bookService.updateById(id, book);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    if (!Book) {
      throw new NotFoundException('Book not found');
    }
    return this.bookService.deleteById(id);
  }
}
