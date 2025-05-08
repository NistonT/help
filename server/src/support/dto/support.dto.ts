import { IsNumber, IsString } from 'class-validator';

export class SendSupportDto {
  @IsNumber()
  user_id: number;

  @IsString()
  title: string;

  @IsString()
  message: string;
}

export class AnswerSupportDto {
  @IsNumber()
  id: number;

  @IsString()
  admin: string;
}
