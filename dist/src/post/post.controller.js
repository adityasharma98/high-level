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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const post_dto_1 = require("./dto/post.dto");
const post_service_1 = require("./providers/post.service");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async createNewPost(createNewPostRequestDTO) {
        try {
            await this.postService.createNewPost(createNewPostRequestDTO);
            let response = {
                isSuccess: true,
                errorMessage: null,
            };
            return response;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async fetchPostsByUserId(userId) {
        try {
            return await this.postService.fetchPostsByUserId(userId);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_1.Post)("create-new-post"),
    openapi.ApiResponse({ status: 201, type: require("./dto/post.dto").CreateNewPostResponseDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.CreateNewPostRequestDTO]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createNewPost", null);
__decorate([
    (0, common_1.Get)("fetch-posts-by-user-id"),
    openapi.ApiResponse({ status: 200, type: require("./dto/post.dto").FetchPostsByUserIdResponseDTO }),
    __param(0, (0, common_1.Query)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "fetchPostsByUserId", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)("post"),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
//# sourceMappingURL=post.controller.js.map