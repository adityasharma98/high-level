"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResponse = void 0;
const openapi = require("@nestjs/swagger");
class BaseResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { isSuccess: { required: false, type: () => Boolean }, errorMessage: { required: false, type: () => String } };
    }
}
exports.BaseResponse = BaseResponse;
//# sourceMappingURL=common.dto.js.map