import { ValidationPipe, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { config } from "../config/index";
import appConfig from "./config/app.config";
import { useContainer } from "class-validator";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.enableShutdownHooks();
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle("API")
    .setDescription("API docs")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("docs", app, document);
  let port = appConfig.port;
  await app.listen(appConfig.port);
}
void bootstrap();
