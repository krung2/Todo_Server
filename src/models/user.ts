import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn
} from 'typeorm';
import Post from './post';

@Entity('user')
export default class User {
  @PrimaryColumn({ name: 'id' })
  id!: string;

  @Column({
    name: 'pw',
    select: false,
  })
  pw!: string;

  @Column({
    name: 'name',
    unique: true,
  })
  name!: string;

  @Column({
    name: 'is_admin',
    type: 'bool',
    default: false,
  })
  isAdmin!: boolean;

  @Column({
    name: 'is_allowed',
    type: 'bool',
    default: false,
  })
  isAllowed!: boolean;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;

  @OneToOne(type => Post, post => post.user)
  post!: Post;
}
