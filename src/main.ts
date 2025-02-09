import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('BesTea POS and Inventory')
    .setDescription('The POS and Inventory API')
    .setVersion('1.0')
    .addTag('pos-and-inventory')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('pos-inventory-api', app, document);
  await app.listen(3000);
}
bootstrap();
