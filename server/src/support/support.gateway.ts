import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UserService } from 'src/user/user.service';
import { AnswerSupportDto, SendSupportDto } from './dto/support.dto';
import { SupportService } from './support.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SupportGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(
    private readonly supportService: SupportService,
    private readonly userService: UserService,
  ) {}

  async handleConnection(client: Socket) {
    const userId = Number(client.handshake.query.userId);

    if (!userId) {
      client.disconnect();
      return;
    }

    client.data.userId = userId;

    const user = await this.userService.getById(userId);

    if (user?.role.code === 'ADMIN') {
      client.join('admin_room');

      const supports = await this.supportService.getAllSupports();
      client.emit('allSupport', supports);

      client.on('newSupportAdmin', (data) => {
        console.log('Admin received newSupportAdmin:', data);
      });
    } else {
      const mySupport = await this.supportService.getMySupports(userId);
      client.emit('mySupport', mySupport);

      client.on('newSupport', (data) => {
        console.log('User received newSupport:', data);
      });

      client.on('supportAnswered', (data) => {
        console.log('User received supportAnswered:', data);
      });
    }

    client.join(`user_${userId}`);

    console.log(`Client connected: ${client.id}, User ID: ${userId}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('send')
  async sendSupport(@MessageBody() dto: SendSupportDto) {
    const support = await this.supportService.sendMessage(dto);

    this.server.to(`user_${dto.user_id}`).emit('newSupport', support);
    this.server.to('admin_room').emit('newSupportAdmin', support);
  }

  @SubscribeMessage('answer')
  async answerSupport(@MessageBody() dto: AnswerSupportDto) {
    const support = await this.supportService.answerMessage(dto);

    this.server.to(`user_${support.userId}`).emit(`supportAnswered`, support);
  }

  @SubscribeMessage('getAllSupports')
  async handleGetAllSupports(client: Socket) {
    const userId = client.data.userId;
    const user = await this.userService.getById(userId);

    console.log(user);

    if (user?.role.code === 'ADMIN') {
      const supports = await this.supportService.getAllSupports();
      client.emit('allSupports', supports);
    } else {
      const mySupports = await this.supportService.getMySupports(userId);
      client.emit('mySupports', mySupports);
    }
  }

  @SubscribeMessage('delete')
  async deleteSupport(@MessageBody('id') id: number) {
    const support = await this.supportService.deleteMessage(id);

    this.server.to(`user_${support.userId}`).emit('deleteSupport', support);
  }
}
