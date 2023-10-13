"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "USERID" }),
    __metadata("design:type", Number)
], UserEntity.prototype, "userid", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "NAME" }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "HANDLE" }),
    __metadata("design:type", String)
], UserEntity.prototype, "handle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "DOB" }),
    __metadata("design:type", String)
], UserEntity.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "PASSWORD" }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)("USER")
], UserEntity);
//# sourceMappingURL=User.js.map