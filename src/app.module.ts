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
      entities: [User, UserPost],
      synchronize: true,
    }),
    UserModule,
    UserPostModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
