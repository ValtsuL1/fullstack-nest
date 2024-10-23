import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private readonly commentRepository: Repository<Comment>
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment: Comment = new Comment()
    comment.content = createCommentDto.content
    comment.creationDate = createCommentDto.creationDate
    comment.userId = createCommentDto.userId
    comment.userPostId = createCommentDto.userPostId
    return this.commentRepository.save(comment)
  }

  findAll() {
    return this.commentRepository.find();
  }

  findAllByUserPostId(id: number) {
    return this.commentRepository.createQueryBuilder('comment')
      .leftJoinAndSelect('comment.user', 'user')
      .where('comment.userPostId = :id', {id: id})
      .orderBy('comment.creationDate', 'DESC')
      .getMany()
  }

  findAllByUserId(id: number) {
    return this.commentRepository.createQueryBuilder('comment')
      .leftJoinAndSelect('comment.user', 'user')
      .where('comment.userId = :id', {id: id})
      .orderBy('comment.creationDate', 'DESC')
      .getMany()
  }

  findOne(id: number) {
    return this.commentRepository.findOneBy({ id });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return this.commentRepository.createQueryBuilder('comment')
      .delete()
      .from(Comment)
      .where('id = :id', {id:id})
      .execute();
  }
}
