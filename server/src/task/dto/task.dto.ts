import { IsNumber, IsOptional, IsString } from 'class-validator';

export class AddTaskDto {
  @IsNumber()
  id_category: number;

  @IsNumber()
  id_status: number;

  @IsString()
  description: string;
}

export class UpdateTaskDto {
  @IsOptional()
  @IsNumber()
  id_category?: number;

  @IsOptional()
  @IsNumber()
  id_status?: number;

  @IsOptional()
  @IsString()
  description?: string;
}
