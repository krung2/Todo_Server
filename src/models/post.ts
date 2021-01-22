import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn
} from "typeorm";
import User from "./user";

@Entity('post')
export default class Post {
  @PrimaryColumn({ name: 'idx' })
  idx!: number;

  @Column({
    name: 'content',
    type: 'text',
  })
  content!: string;

  @JoinColumn({ name: 'fk_user_id' })
  @OneToOne(type => User, {
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  })
  user!: User | null;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;
}