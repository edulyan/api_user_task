import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './dto/user.dto';
import { UserUpdate } from './dto/userUpdate.dto';
import { TaskEntity } from './entity/task.entity';
import { UserEntity } from './entity/user.entity';
import { TaskService } from './tasks/task.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.appService.getById(id);
  }

  @Post()
  create(@Body() user: UserEntity, @Body() task: TaskEntity) {
    const createUser = this.appService.create(user, task);
    return createUser;
  }

  @Post('addTask/:userId/:taskId')
  addTask(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('taskId', ParseIntPipe) taskId: number,
  ) {
    return this.appService.addTask(userId, taskId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(id);
  }

  @Put(':id')
  update(@Body() upUser: UserUpdate, @Param('id') id: string) {
    return this.appService.update(id, upUser);
  }
}
