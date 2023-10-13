import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
export declare class TypeOrmConfigServiceSqlLite implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions;
}
