import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'argon2';
import { PrismaService } from 'src/prisma.service';
import { RegisterUser } from './dto/register.dto';
import { UpdateUserDto } from './dto/update.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Создание пользователя
  public async create(dto: RegisterUser): Promise<User> {
    return await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: await hash(dto.password),
        number: dto.number,
        login: dto.login,
        roleId: 1,
        departmentId: dto.id_department,
      },
      include: {
        role: true,
        department: true,
      },
    });
  }

  // Обновление пользователя
  public async update(dto: UpdateUserDto, id: number): Promise<User> {
    const user = await this.getById(id);

    if (!user) throw new BadRequestException('Пользователь не найден');

    return await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: dto.name,
        login: dto.login,
        email: dto.email,
        number: dto.number,
        roleId: dto.roleId,
        departmentId: dto.id_department,
      },
      include: {
        role: true,
        department: true,
      },
    });
  }

  // Вывод всех пользователей
  public async getByAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  // Поиск пользователя по идентификатору
  public async getById(id: number) {
    const userId = this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        role: true,
        department: true,
      },
    });

    return userId;
  }

  // Поиск пользователя по почте
  public async getByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        role: true,
        department: true,
      },
    });
  }

  // Поиск пользователя по логину
  public async getByLogin(login: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        login,
      },
      include: {
        role: true,
        department: true,
      },
    });
  }
}
