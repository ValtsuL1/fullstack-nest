import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { UserPostModule } from './user_post/user_post.module';
import { UserPost } from './user_post/entities/user_post.entity';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/entities/comment.entity';
import { ChatGateway } from './chat/chat.gateway';
import { ChatMessageModule } from './chat_message/chat_message.module';
import { ChatMessage } from './chat_message/entities/chat_message.entity';

// database information
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.DATABASE_PASSWORD,
      database: 'fullstackProject',
      entities: [User, UserPost, Comment, ChatMessage],
      synchronize: true,
    }),
    UserModule,
    UserPostModule,
    AuthModule,
    CommentModule,
    ChatMessageModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
