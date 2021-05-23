import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todolist } from './todolists/entities/todolist.entity';
import { TodolistsModule } from './todolists/todolists.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'todo-app',
      entities: [Todolist],
      synchronize: true,
    }),
    TodolistsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
