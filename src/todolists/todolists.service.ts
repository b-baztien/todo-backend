import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { Repository } from 'typeorm';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';
import { Todolist } from './entities/todolist.entity';

@Injectable()
export class TodolistsService {
  constructor(
    @InjectRepository(Todolist)
    private todolistRepository: Repository<Todolist>,
  ) {}

  create(createTodolistDto: CreateTodolistDto) {
    return this.todolistRepository.save(createTodolistDto);
  }

  findAll() {
    return this.todolistRepository.find();
  }

  findOne(id: ObjectID) {
    return this.todolistRepository.find({ where: { _id: id } });
  }

  async update(id: ObjectID, updateTodolistDto: UpdateTodolistDto) {
    let newTodolist: Todolist[] = await this.todolistRepository.find({
      where: { _id: id },
    });

    newTodolist[0].detail = updateTodolistDto.detail;
    newTodolist[0].header = updateTodolistDto.header;

    return this.todolistRepository.save(newTodolist);
  }

  async remove(id: ObjectID) {
    let newTodolist: Todolist[] = await this.todolistRepository.find({
      where: { _id: id },
    });

    return this.todolistRepository.remove(newTodolist);
  }
}
