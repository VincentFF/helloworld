import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const dbInfo = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ?? '5432',
    user: process.env.DB_USER,
    password: process.env.DB_PASS ? '***' : undefined,
    database: process.env.DB_NAME,
  };
  console.log('[startup] DB config:', dbInfo);

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
