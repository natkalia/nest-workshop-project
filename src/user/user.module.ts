import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserMiddleware } from './middlewares/user.middleware';
import { ConfigModule } from '../config';
import { AuthService } from './services/auth.service';

@Module({
  imports: [ConfigModule],
  controllers: [UserController],
  providers: [UserService, AuthService],
  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes(UserController);
  }
}