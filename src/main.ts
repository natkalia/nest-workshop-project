import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter} from '@nestjs/platform-express'
import {app as expressApp } from '../express/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.listen(3000);
}
bootstrap();
