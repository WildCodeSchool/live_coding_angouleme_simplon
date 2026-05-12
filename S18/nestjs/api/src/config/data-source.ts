import { Post } from '../modules/posts/post.entity';
import { User } from '../modules/users/entities/user.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql', // ou mysql, sqlite, etc.
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Papa10021948',
  database: 'liveconestjs',
  entities: [User, Post],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // IMPORTANT en prod
});
