import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Post } from '../../posts/post.entity';

@Entity('users') // Nom de la table SQL
export class User {
  @PrimaryGeneratedColumn() // INT AUTO_INCREMENT
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ select: false }) // Exclue des SELECT par défaut
  password!: string;

  @Column({ default: true })
  isActive!: boolean;

  @Column({ type: 'enum', enum: ['admin', 'user'], default: 'user' })
  role!: string;

  @OneToMany(() => Post, (post) => post.author)
  posts!: Post[]; // Relation : un user a plusieurs posts

  @CreateDateColumn() // Rempli auto à la création
  createdAt!: Date;

  @UpdateDateColumn() // Mis à jour automatiquement
  updatedAt!: Date;
}
