import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { SupportModule } from './support/support.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, RoleModule, SupportModule],
})
export class AppModule {}
