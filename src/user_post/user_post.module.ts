import { Module } from '@nestjs/common';
import { UserPostService } from './user_post.service';
import { UserPostController } from './user_post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPost } from './entities/user_post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPost])],
  controllers: [UserPostController],
  providers: [UserPostService],
})
export class UserPostModule {}
