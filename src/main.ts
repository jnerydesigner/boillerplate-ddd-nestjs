import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/modules/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new ConfigService();
  const logger = new Logger();
  const port = Number(config.get('SERVER_PORT')) || 3000;

  await app.listen(port, () => {
    logger.log(`Server is running on http://localhost:${port}`);
  });
}
bootstrap();
