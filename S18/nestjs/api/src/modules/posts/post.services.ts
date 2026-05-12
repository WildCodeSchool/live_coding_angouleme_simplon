import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepo: Repository<Post>,
  ) {}

  findAll(page = 1, limit = 10) {
    return this.postsRepo.findAndCount({
      where: { published: true },
      order: { createdAt: 'DESC' },
      take: limit,
      skip: (page - 1) * limit,
    });
  }

  async findOne(id: number) {
    const post = await this.postsRepo.findOneBy({ id });
    if (!post) throw new NotFoundException(`Post #${id} introuvable`);
    return post;
  }

  async create(dto: Partial<Post>, authorId: number) {
    const post = this.postsRepo.create({ ...dto, author: { id: authorId } });
    return await this.postsRepo.save(post);
  }

  async update(id: number, dto: Partial<Post>) {
    await this.findOne(id);
    await this.postsRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.postsRepo.delete(id);
    return { message: `Post #${id} supprimé` };
  }
}
