import { Module } from '@nestjs/common';
import { ChatMessageService } from './chat_message.service';
import { ChatMessageController } from './chat_message.controller';

@Module({
  controllers: [ChatMessageController],
  providers: [ChatMessageService],
})
export class ChatMessageModule {}
