"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchPostsByUserIdResponse = exports.FetchPostsByUserIdResponseDTO = exports.CreateNewPostResponseDTO = exports.CreateNewPostRequestDTO = void 0;
const openapi = require("@nestjs/swagger");
const common_dto_1 = require("../../common/dto/common.dto");
class CreateNewPostRequestDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, body: { required: true, type: () => String }, userId: { required: true, type: () => Number } };
    }
}
exports.CreateNewPostRequestDTO = CreateNewPostRequestDTO;
class CreateNewPostResponseDTO extends common_dto_1.BaseResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateNewPostResponseDTO = CreateNewPostResponseDTO;
class FetchPostsByUserIdResponseDTO extends common_dto_1.BaseResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { posts: { required: true, type: () => [require("./post.dto").FetchPostsByUserIdResponse] } };
    }
}
exports.FetchPostsByUserIdResponseDTO = FetchPostsByUserIdResponseDTO;
class FetchPostsByUserIdResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, body: { required: true, type: () => String } };
    }
}
exports.FetchPostsByUserIdResponse = FetchPostsByUserIdResponse;
//# sourceMappingURL=post.dto.js.map