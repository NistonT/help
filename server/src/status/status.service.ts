import { Injectable } from '@nestjs/common';
import { Status } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { AddStatusDto, UpdateStatusDto } from './dto/status.dto';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  // Добавление статуса
  public async add(dto: AddStatusDto): Promise<Status> {
    const addStatus = await this.prisma.status.create({
      data: {
        name: dto.name,
        code: dto.code,
      },
      include: {
        Task: true,
      },
    });

    return addStatus;
  }

  // Вывод всех статусов
  public async get(): Promise<Status[]> {
    const getStatus = await this.prisma.status.findMany({
      include: {
        Task: true,
      },
    });

    return getStatus;
  }

  // Вывод определленого статуса
  public async getId(id: number): Promise<Status> {
    const getStatus = await this.prisma.status.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        Task: true,
      },
    });

    return getStatus;
  }

  // Изменение статуса
  public async put(dto: UpdateStatusDto, id: number): Promise<Status> {
    const updateStatus = await this.prisma.status.update({
      where: {
        id: Number(id),
      },
      data: {
        name: dto.name,
        code: dto.code,
      },
      include: {
        Task: true,
      },
    });

    return updateStatus;
  }

  // Удаление статуса
  public async delete(id: number): Promise<Status> {
    const deleteStatus = await this.prisma.status.delete({
      where: {
        id: Number(id),
      },
      include: {
        Task: true,
      },
    });

    return deleteStatus;
  }
}
