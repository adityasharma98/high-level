"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfigServiceSqlLite = void 0;
const common_1 = require("@nestjs/common");
const Followers_1 = require("../user/entities/Followers");
const Company_1 = require("../user/entities/Company");
const Post_1 = require("../post/entities/Post");
const User_1 = require("../user/entities/User");
const index_1 = require("../../config/index");
let TypeOrmConfigServiceSqlLite = class TypeOrmConfigServiceSqlLite {
    createTypeOrmOptions() {
        return {
            name: index_1.config.SQLLITE_NAME,
            type: index_1.config.SQLLITE_TYPE,
            database: index_1.config.SQLLITE_DB,
            entities: [User_1.UserEntity, Post_1.PostEntity, Followers_1.Followers, Company_1.Company],
            logging: false,
            options: {
                encrypt: false,
            },
        };
    }
};
exports.TypeOrmConfigServiceSqlLite = TypeOrmConfigServiceSqlLite;
exports.TypeOrmConfigServiceSqlLite = TypeOrmConfigServiceSqlLite = __decorate([
    (0, common_1.Injectable)()
], TypeOrmConfigServiceSqlLite);
//# sourceMappingURL=typeorm-config.service.js.map