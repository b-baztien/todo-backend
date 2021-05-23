import { Module } from '@nestjs/common';
import { TodolistsService } from './todolists.service';
import { TodolistsController } from './todolists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todolist } from './entities/todolist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todolist])],
  controllers: [TodolistsController],
  providers: [TodolistsService],
})
export class TodolistsModule {}
