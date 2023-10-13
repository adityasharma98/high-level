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
exports.Company = void 0;
const typeorm_1 = require("typeorm");
let Company = class Company {
};
exports.Company = Company;
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "ID", unique: true }),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "NAME" }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "AGE" }),
    __metadata("design:type", Number)
], Company.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "ADDRESS", nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Company.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("real", { name: "SALARY", nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "salary", void 0);
exports.Company = Company = __decorate([
    (0, typeorm_1.Entity)("COMPANY")
], Company);
//# sourceMappingURL=Company.js.map