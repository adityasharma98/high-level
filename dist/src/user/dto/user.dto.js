"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchFollowersByUserIdResponseDTO = exports.FollowUserRequestDTO = exports.CreateNewUserResponseDTO = exports.CreateNewUserRequestDTO = void 0;
const openapi = require("@nestjs/swagger");
const common_dto_1 = require("../../common/dto/common.dto");
class CreateNewUserRequestDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, handle: { required: true, type: () => String }, dob: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
exports.CreateNewUserRequestDTO = CreateNewUserRequestDTO;
class CreateNewUserResponseDTO extends common_dto_1.BaseResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => Number } };
    }
}
exports.CreateNewUserResponseDTO = CreateNewUserResponseDTO;
class FollowUserRequestDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => Number }, followUserHandle: { required: true, type: () => String } };
    }
}
exports.FollowUserRequestDTO = FollowUserRequestDTO;
class FetchFollowersByUserIdResponseDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { userIds: { required: true, type: () => [Number] } };
    }
}
exports.FetchFollowersByUserIdResponseDTO = FetchFollowersByUserIdResponseDTO;
//# sourceMappingURL=user.dto.js.map