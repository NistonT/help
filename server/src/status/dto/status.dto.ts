import { IsOptional, IsString } from 'class-validator';

export class AddStatusDto {
  @IsString()
  name: string;

  @IsString()
  code: string;
}

export class UpdateStatusDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  code?: string;
}
