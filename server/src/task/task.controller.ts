import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Task } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/user.decorator';
import { AddTaskDto, UpdateTaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  @Auth()
  public async add(
    @Body() dto: AddTaskDto,
    @CurrentUser('id') id: number,
  ): Promise<Task> {
    return await this.taskService.add(dto, id);
  }

  @Get('all')
  @Auth()
  public async get(): Promise<Task[]> {
    return await this.taskService.get();
  }

  @Get('user')
  @Auth()
  public async getToUser(@CurrentUser('id') id: number): Promise<Task[]> {
    return await this.taskService.getToUser(id);
  }

  @Get()
  @Auth()
  public async getId(@Query('id') id: number): Promise<Task> {
    return await this.taskService.getId(id);
  }

  @UsePipes(new ValidationPipe())
  @Put()
  @Auth()
  public async put(
    @Body() dto: UpdateTaskDto,
    @Query('id') id: number,
  ): Promise<Task> {
    return await this.taskService.put(dto, id);
  }

  @Delete()
  @Auth()
  public async delete(@Query('id') id: number): Promise<Task> {
    return await this.taskService.delete(id);
  }
}
