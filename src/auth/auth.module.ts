import { MiddlewareConsumer, Module } from '@nestjs/common';
import { logger } from 'src/logger/logger.middleware';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('auth');
  }
}
