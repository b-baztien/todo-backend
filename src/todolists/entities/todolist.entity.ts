import { ObjectID } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Todolist {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  detail: string;

  @Column()
  header: string;
}
