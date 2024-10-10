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

  findAll() {
    return this.userPostRepository.find();
  }

  findOne(id: number) {
    this.userPostRepository.findOneBy({ id });
  }

  update(id: number, updateUserPostDto: UpdateUserPostDto) {
    return `This action updates a #${id} userPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPost`;
  }
}
