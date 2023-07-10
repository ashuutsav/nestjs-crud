import { Module } from '@nestjs/common';
import * as Mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './schema/author.schema';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]),
  ],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
