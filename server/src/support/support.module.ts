import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserModule } from 'src/user/user.module';
import { SupportGateway } from './support.gateway';
import { SupportService } from './support.service';

@Module({
  imports: [UserModule],
  providers: [SupportGateway, SupportService, PrismaService],
})
export class SupportModule {}
