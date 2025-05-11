import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { AddTaskDto, UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  // Добавление задачи
  public async add(dto: AddTaskDto, id_user: number): Promise<Task> {
    const addTask = await this.prisma.task.create({
      data: {
        userId: Number(id_user),
        categoryId: dto.id_category,
        statusId: dto.id_status,
        description: dto.description,
      },
      include: {
        category: true,
        status: true,
        user: true,
      },
    });

    return addTask;
  }

  // Вывод всех задач
  public async get(): Promise<Task[]> {
    const getTask = await this.prisma.task.findMany({
      include: {
        category: true,
        status: true,
        user: true,
      },
    });

    return getTask;
  }

  // Вывод всех задач у пользователя
  public async getToUser(id_user: number): Promise<Task[]> {
    const getTask = await this.prisma.task.findMany({
      where: {
        userId: Number(id_user),
      },
      include: {
        category: true,
        status: true,
        user: true,
      },
    });

    return getTask;
  }

  // Вывод определенной задачи
  public async getId(id: number): Promise<Task> {
    const getTask = await this.prisma.task.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        category: true,
        status: true,
        user: true,
      },
    });

    return getTask;
  }

  // Изменить задачу
  public async put(dto: UpdateTaskDto, id: number): Promise<Task> {
    const updateTask = await this.prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        categoryId: dto.id_category,
        statusId: dto.id_status,
        description: dto.description,
      },
      include: {
        category: true,
        status: true,
        user: true,
      },
    });

    return updateTask;
  }

  // Удалить задачу
  public async delete(id: number): Promise<Task> {
    const deleteTask = await this.prisma.task.delete({
      where: {
        id: Number(id),
      },
      include: {
        category: true,
        status: true,
        user: true,
      },
    });

    return deleteTask;
  }
}
