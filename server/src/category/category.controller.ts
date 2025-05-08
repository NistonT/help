import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Category } from '@prisma/client';
import { CategoryService } from './category.service';
import { AddCategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Добавление категории
  @UsePipes(new ValidationPipe())
  @Post()
  public async addCategory(@Body() dto: AddCategoryDto): Promise<Category> {
    return await this.categoryService.add(dto);
  }

  // Вывод всех категорий
  @Get()
  public async getCategory(): Promise<Category[]> {
    return await this.categoryService.get();
  }

  // Удаление категории по идентификатору
  @Delete()
  public async deleteCategory(@Query('id') id: number): Promise<Category> {
    return await this.categoryService.delete(id);
  }
}
