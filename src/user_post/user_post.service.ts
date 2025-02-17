import { Injectable } from '@nestjs/common';
import { CreateUserPostDto } from './dto/create-user_post.dto';
import { UpdateUserPostDto } from './dto/update-user_post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPost } from './entities/user_post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserPostService {
  constructor(
    @InjectRepository(UserPost) private readonly userPostRepository: Repository<UserPost>
  ) {}

  create(createUserPostDto: CreateUserPostDto) {
    const userPost: UserPost = new UserPost();
    userPost.title = createUserPostDto.title;
    userPost.content = createUserPostDto.content;
    userPost.userId = createUserPostDto.userId;
    userPost.creationDate = createUserPostDto.creationDate;
    return this.userPostRepository.save(userPost);
  }
  /*
  findAll() {
    return this.userPostRepository.find();
  }
    */

  findAll() {
    return this.userPostRepository.createQueryBuilder('user-post')
      .leftJoinAndSelect('user-post.user', 'user')
      .orderBy('user-post.creationDate', 'DESC')
      .getMany()
  }

  findAllByUserId(id: number) {
    return this.userPostRepository.createQueryBuilder('user-post')
      .leftJoinAndSelect('user-post.user', 'user')
      .where('user-post.userId = :id', {id:id})
      .orderBy('user-post.creationDate', 'DESC')
      .getMany()
  }

  findOne(id: number) {
    try {
    return this.userPostRepository.createQueryBuilder('user-post')
      .leftJoinAndSelect('user-post.user', 'user')
      .where('user-post.id = :id', {id:id})
      .getOne();
    }
    catch (err) {
      return err
    }
  }

  update(id: number, updateUserPostDto: UpdateUserPostDto) {
    return this.userPostRepository.createQueryBuilder('user-post')
    .update(UserPost)
    .set({ title: updateUserPostDto.title, content: updateUserPostDto.content })
    .where('id = :id', {id:id})
    .execute();
  }

  remove(id: number) {
    return this.userPostRepository.createQueryBuilder('user-post')
      .delete()
      .from(UserPost)
      .where('id = :id', {id:id})
      .execute();
  }
}
