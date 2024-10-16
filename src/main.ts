import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExceptionHandling } from './common/helpers/globalCatchHandler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExceptionHandling());
  app.setGlobalPrefix('api/v1');
  const swaggereConfig = new DocumentBuilder()
  .setTitle('Chat Application')
  .setDescription('Chat Application API')
  .setVersion('1.0')
  .addBasicAuth()
  .addServer('http://localhost:4000')
  .build();

  const document = SwaggerModule.createDocument(app, swaggereConfig);
  SwaggerModule.setup('docs', app, document);
  app.enableCors({
    origin: '*'
  })
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
