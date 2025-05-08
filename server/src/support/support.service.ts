import { BadGatewayException, Injectable } from '@nestjs/common';
import { Support } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { AnswerSupportDto, SendSupportDto } from './dto/support.dto';

@Injectable()
export class SupportService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  // Получение по id заявку
  public async getSupportId(id: number): Promise<Support> {
    const supportId = await this.prisma.support.findUnique({
      where: {
        id,
      },
    });

    if (!supportId) throw new BadGatewayException('Заявка не найден');

    return supportId;
  }

  // Вывод всех заявок
  public async getAllSupports(): Promise<Support[]> {
    return this.prisma.support.findMany({
      include: {
        user: true,
      },
    });
  }

  // Вывод заявки пользователя по id
  public async getMySupports(userId: number): Promise<Support[]> {
    return this.prisma.support.findMany({
      where: {
        user_id: userId,
      },
      include: {
        user: true,
      },
    });
  }

  // Отправление заявки
  public async sendMessage(dto: SendSupportDto): Promise<Support> {
    const user = await this.userService.getById(dto.user_id);

    if (!user) throw new BadGatewayException('Пользователь не найден');

    const createSupport = this.prisma.support.create({
      data: {
        user_id: user.id,
        title: dto.title,
        message: dto.message,
      },
    });

    return createSupport;
  }

  // Ответ заявки
  public async answerMessage(dto: AnswerSupportDto): Promise<Support> {
    const supportId = await this.getSupportId(dto.id);

    const supportAnswerAdmin = await this.prisma.support.update({
      where: {
        id: supportId.id,
      },
      data: {
        admin: dto.admin,
      },
    });

    return supportAnswerAdmin;
  }

  public async deleteMessage(id: number): Promise<Support> {
    const supportId = await this.getSupportId(id);

    const supportDelete = await this.prisma.support.delete({
      where: {
        id: supportId.id,
      },
    });

    return supportDelete;
  }
}
