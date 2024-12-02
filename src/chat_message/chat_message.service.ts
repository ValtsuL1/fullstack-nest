import { Injectable } from '@nestjs/common';
import { CreateChatMessageDto } from './dto/create-chat_message.dto';
import { UpdateChatMessageDto } from './dto/update-chat_message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatMessage } from './entities/chat_message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatMessageService {
  constructor(
    @InjectRepository(ChatMessage) private readonly chatMessageRepository: Repository<ChatMessage>
  ) {}
  create(createChatMessageDto: CreateChatMessageDto): Promise<ChatMessage> {
    const chatMessage: ChatMessage = new ChatMessage()
    chatMessage.content = createChatMessageDto.content
    chatMessage.creationDate = createChatMessageDto.creationDate
    chatMessage.userId = createChatMessageDto.userId
    chatMessage.receiverId = createChatMessageDto.receiverId
    return this.chatMessageRepository.save(chatMessage);
  }

  findAllByUserAndReceiverId(params: number) {
    return this.chatMessageRepository.createQueryBuilder('chat-message')
      .select('chat-message')
      .where('chat-message.userId = :userId', {userId: params[0]})
      .andWhere('chat-message.receiverId = :receiverId', {receiverId: params[1]})
      .orderBy('chat-message.creationDate', 'DESC')
      .getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} chatMessage`;
  }

  update(id: number, updateChatMessageDto: UpdateChatMessageDto) {
    return `This action updates a #${id} chatMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatMessage`;
  }
}
