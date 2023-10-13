import {
  Module,
  Logger,
  NestModule,
  Inject,
  MiddlewareConsumer,
} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigServiceSqlLite } from "./database/typeorm-config.service";
import { AppController } from "./app.controller";
import { UserModule } from "./user/user.module";
import { PostModule } from "./post/post.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: "sqlLite",
      useClass: TypeOrmConfigServiceSqlLite,
    }),
    UserModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
