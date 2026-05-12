import { Controller } from '@nestjs/common';
import { PostsService } from './post.services';

@Controller('posts')
export class PostController {
  constructor(private readonly postsService: PostsService) {}
  getAllPosts() {
    return this.postsService.findAll();
  }
}
