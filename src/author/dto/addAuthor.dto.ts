import { IsNotEmpty, IsString } from 'class-validator';
// import { Types } from 'mongoose';

export class AddAuthorDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
