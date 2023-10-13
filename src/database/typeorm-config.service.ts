import { Injectable, Post } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Followers } from "src/user/entities/Followers";
import { Company } from "src/user/entities/Company";
import { PostEntity } from "src/post/entities/Post";
import { UserEntity } from "src/user/entities/User";
import { config } from "../../config/index";

@Injectable()
export class TypeOrmConfigServiceSqlLite implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: config.SQLLITE_NAME,
      type: config.SQLLITE_TYPE,
      database: config.SQLLITE_DB,
      entities: [UserEntity, PostEntity, Followers, Company],

      logging: false,
      options: {
        encrypt: false,
      },
    } as TypeOrmModuleOptions;
  }
}
