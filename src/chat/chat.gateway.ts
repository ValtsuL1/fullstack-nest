import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketServer
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server } from "socket.io"
import { createServer } from 'http';

@WebSocketGateway({ 
  cors: {
    origin: "http://localhost:5173",
    credentials: true
  }
 })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  private readonly logger = new Logger(ChatGateway.name)
  
  @WebSocketServer() io: Server

  
  
  afterInit() {
    this.logger.log("Initialized")
  }

  handleConnection(client: any, ...args: any[]) {
    const { sockets } = this.io.sockets
    this.logger.log(`Client id: ${client.id} connected`)
    this.logger.debug(`Number of connected clients: ${sockets.size}`)
  }

  handleDisconnect(client: any) {
    this.logger.log(`Client id: ${client.id} disconnected`)
  }

  @SubscribeMessage("message")
  handleMessage(client: any, data: any) {
    this.logger.log(`Message received from client id: ${client.id}`)
    this.logger.debug(`Payload: ${data}`)
    return {
      event: "message",
      data
    }
  }
}
