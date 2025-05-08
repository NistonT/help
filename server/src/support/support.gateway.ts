import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AnswerSupportDto, SendSupportDto } from './dto/support.dto';
import { SupportService } from './support.service';

@WebSocketGateway()
export class SupportGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(private readonly supportService: SupportService) {}

  handleConnection(client: Socket) {
    console.log('Подключенно' + client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Отключено' + client.id);
  }

  @SubscribeMessage('send')
  async sendSupport(@MessageBody() dto: SendSupportDto) {}

  @SubscribeMessage('answer')
  async answerSupport(@MessageBody() dto: AnswerSupportDto) {}
}
