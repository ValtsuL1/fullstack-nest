import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketIoAdapter } from './adapters/socket-io.adapter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  app.enableCors({
    allowedHeaders: ['content-type', 'authorization', 'access-control-allow-origin'],
    origin: 'http://localhost:5173',
    credentials: true,
  })
  //app.useWebSocketAdapter(new SocketIoAdapter(app, configService))
  await app.listen(3000);
}
bootstrap();
