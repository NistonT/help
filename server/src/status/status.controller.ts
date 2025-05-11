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
import { Status } from '@prisma/client';
import { AddStatusDto, UpdateStatusDto } from './dto/status.dto';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  public async add(@Body() dto: AddStatusDto): Promise<Status> {
    return await this.statusService.add(dto);
  }

  @Get('all')
  public async get(): Promise<Status[]> {
    return await this.statusService.get();
  }

  @Get()
  public async getId(@Query('id') id: number): Promise<Status> {
    return await this.statusService.getId(id);
  }

  @UsePipes(new ValidationPipe())
  @Put()
  public async put(
    @Body() dto: UpdateStatusDto,
    @Query('id') id: number,
  ): Promise<Status> {
    return await this.statusService.put(dto, id);
  }

  @Delete()
  public async delete(@Query('id') id: number): Promise<Status> {
    return await this.statusService.delete(id);
  }
}
