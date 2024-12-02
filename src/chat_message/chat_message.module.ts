import { Module } from '@nestjs/common';
import { ChatMessageService } from './chat_message.service';
import { ChatMessageController } from './chat_message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatMessage } from './entities/chat_message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatMessage])],
  controllers: [ChatMessageController],
  providers: [ChatMessageService],
  exports: [ChatMessageService]
})
export class ChatMessageModule {}
