import { IsNumber, IsString } from 'class-validator';

export class RegisterUser {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
  number: string;

  @IsString()
  login: string;

  @IsString()
  email: string;

  @IsNumber()
  id_department: number;
}
