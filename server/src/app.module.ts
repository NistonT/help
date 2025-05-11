import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { SupportModule } from './support/support.module';
import { CategoryModule } from './category/category.module';
import { DepartmentModule } from './department/department.module';
import { StatusModule } from './status/status.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, RoleModule, SupportModule, CategoryModule, DepartmentModule, StatusModule, TaskModule],
})
export class AppModule {}
