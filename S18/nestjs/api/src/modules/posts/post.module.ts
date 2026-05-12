import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PostsService } from './post.services';
import { PostController } from './post.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Post])], // Injecte Repository<Post>
  controllers: [PostController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
