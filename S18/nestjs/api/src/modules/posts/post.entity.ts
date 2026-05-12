import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/entities/user.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  title!: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({ default: false })
  published!: boolean;

  // Plusieurs posts appartiennent à un auteur (User)
  @ManyToOne(() => User, (user) => user.posts, { eager: true })
  @JoinColumn({ name: 'author_id' })
  author!: User;

  @CreateDateColumn()
  createdAt!: Date;
}
