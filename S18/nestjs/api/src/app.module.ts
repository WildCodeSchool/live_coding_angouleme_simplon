import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './modules/posts/post.module';
import { UsersController } from './modules/users/users.controller';
import { UsersModule } from './modules/users/users.module';
import { PostController } from './modules/posts/post.controller';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(DataSource:DataSource), PostsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
