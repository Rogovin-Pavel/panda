import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });

  const config = await app.get(ConfigService);
  const port = config.get<number>('API_PORT') || 3000;
  await app.listen(port, () => console.log(`App is started on port ${port}`));
}
bootstrap();
