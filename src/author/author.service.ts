import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Author } from './schema/author.schema';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name)
    private AuthorModel: mongoose.Model<Author>,
  ) {}

  async findAll(): Promise<Author[]> {
    const authors = await this.AuthorModel.find();
    return authors;
  }

  async create(author: Author): Promise<Author> {
    const res = await this.AuthorModel.create(author);
    return res;
  }

  async findById(id: number): Promise<Author> {
    try {
      const res = await this.AuthorModel.findById(id);
      return res;
    } catch (err) {
      throw new NotFoundException('Author not found');
    }
  }

  async updateById(id: number, author: Author) {
    const res = await this.AuthorModel.findByIdAndUpdate(id, author, {
      new: true,
      runValidators: true,
    });
    return res;
  }

  async deleteById(id: number) {
    const res = await this.AuthorModel.findByIdAndDelete(id);
    return res;
  }
}
