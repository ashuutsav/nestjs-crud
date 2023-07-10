import { IsNotEmpty, IsString } from 'class-validator';
// import { Types } from 'mongoose';

export class AddAuthorDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
