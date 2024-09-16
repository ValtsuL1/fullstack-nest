import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostModule } from './post/post.module';
import { UserPostModule } from './user_post/user_post.module';

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
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    PostModule,
    UserPostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
