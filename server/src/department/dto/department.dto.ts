import { IsOptional, IsString } from 'class-validator';

export class AddDepartmentDto {
  @IsString()
  name: string;

  @IsString()
  code: string;
}

export class UpdateDepartmentDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  code?: string;
}
