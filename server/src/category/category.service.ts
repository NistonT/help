import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { AddCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  // Добавление категории
  public async add(dto: AddCategoryDto): Promise<Category> {
    const addCategory = await this.prisma.category.create({
      data: {
        name: dto.name,
      },
    });

    return addCategory;
  }

  // Вывод категории
  public async get(): Promise<Category[]> {
    const getCategory = await this.prisma.category.findMany();

    return getCategory;
  }

  // Удаление категории
  public async delete(id: number): Promise<Category> {
    const deleteCategory = await this.prisma.category.delete({
      where: {
        id,
      },
    });

    return deleteCategory;
  }
}
