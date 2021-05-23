import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TodolistsService } from './todolists.service';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';
import { ObjectID } from 'mongodb';

@Controller('todolists')
export class TodolistsController {
  constructor(private readonly todolistsService: TodolistsService) {}

  @Post()
  create(@Body() createTodolistDto: CreateTodolistDto) {
    return this.todolistsService.create(createTodolistDto);
  }

  @Get()
  findAll() {
    return this.todolistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todolistsService.findOne(new ObjectID(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodolistDto: UpdateTodolistDto,
  ) {
    return this.todolistsService.update(new ObjectID(id), updateTodolistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todolistsService.remove(new ObjectID(id));
  }
}
