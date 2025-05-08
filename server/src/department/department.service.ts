import { Injectable } from '@nestjs/common';
import { Department } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { AddDepartmentDto, UpdateDepartmentDto } from './dto/department.dto';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  // Добавление департамента
  public async add(dto: AddDepartmentDto): Promise<Department> {
    const addDepartment = await this.prisma.department.create({
      data: {
        name: dto.name,
        code: dto.code,
      },
      include: {
        User: true,
      },
    });

    return addDepartment;
  }

  // Вывод департамента
  public async get(): Promise<Department[]> {
    const getDepartment = await this.prisma.department.findMany({
      include: {
        User: true,
      },
    });

    return getDepartment;
  }

  // Вывод департамента по идентификатору
  public async getId(id: number): Promise<Department> {
    const getIdDepartment = await this.prisma.department.findUnique({
      where: {
        id,
      },
      include: {
        User: true,
      },
    });

    return getIdDepartment;
  }

  // Обновление данных департамента
  public async update(
    dto: UpdateDepartmentDto,
    id: number,
  ): Promise<Department> {
    const updateDepartment = await this.prisma.department.update({
      where: {
        id,
      },
      data: {
        name: dto.name,
        code: dto.code,
      },
      include: {
        User: true,
      },
    });

    return updateDepartment;
  }

  // Удаление департамента
  public async delete(id: number): Promise<Department> {
    const deleteDepartment = await this.prisma.department.delete({
      where: {
        id,
      },
      include: {
        User: true,
      },
    });

    return deleteDepartment;
  }
}
