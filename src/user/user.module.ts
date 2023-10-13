import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { UserEntity } from "./entities/User";
import { UserService } from "./providers/user.service";
import { Followers } from "./entities/Followers";
import { Company } from "src/user/entities/Company";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, Followers, Company], "sqlLite"),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
