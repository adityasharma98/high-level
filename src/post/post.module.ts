import { Module, Post } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostController } from "./post.controller";
import { PostEntity } from "./entities/Post";
import { PostService } from "./providers/post.service";

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity], "sqlLite")],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
