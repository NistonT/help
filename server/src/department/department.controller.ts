import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Department } from '@prisma/client';
import { DepartmentService } from './department.service';
import { AddDepartmentDto, UpdateDepartmentDto } from './dto/department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  // Добавление департамента
  @UsePipes(new ValidationPipe())
  @Post()
  public async addDepartment(
    @Body() dto: AddDepartmentDto,
  ): Promise<Department> {
    return await this.departmentService.add(dto);
  }

  // Вывод всех департаментов
  @Get('all')
  public async getDepartment(): Promise<Department[]> {
    return await this.departmentService.get();
  }

  // Вывод департамента по идентификатору
  @Get()
  public async getIdDepartment(@Query('id') id: number): Promise<Department> {
    return await this.departmentService.getId(id);
  }

  // Обновление данных в департаменте
  @UsePipes(new ValidationPipe())
  @Put()
  public async updateDepartment(
    @Body() dto: UpdateDepartmentDto,
    @Query('id') id: number,
  ): Promise<Department> {
    return await this.departmentService.update(dto, id);
  }

  // Удаление департамента
  @Delete()
  public async deleteDepartment(@Query('id') id: number): Promise<Department> {
    return await this.departmentService.delete(id);
  }
}
