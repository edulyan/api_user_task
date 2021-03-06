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

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([TaskEntity]),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
