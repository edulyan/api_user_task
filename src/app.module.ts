import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
import { UserEntity } from './entity/user.entity';
import { TaskEntity } from './entity/task.entity';
import { TaskController } from './tasks/task.controller';
import { TaskService } from './tasks/task.service';
import { TaskModule } from './tasks/task.module';
import { UserTaskEntity } from './entity/users_tasks.entity';
import { UserTaskController } from './user_task/user_task.controller';
import { UserTaskService } from './user_task/user_task.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([TaskEntity]),
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([UserTaskEntity]),
  ],
  controllers: [AppController, TaskController, UserTaskController],
  providers: [AppService, TaskService, UserTaskService],
})
export class AppModule {}
