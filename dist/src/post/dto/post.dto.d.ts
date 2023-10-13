import { BaseResponse } from "../../common/dto/common.dto";
export declare class CreateNewPostRequestDTO {
    title: string;
    body: string;
    userId: number;
}
export declare class CreateNewPostResponseDTO extends BaseResponse {
}
export declare class FetchPostsByUserIdResponseDTO extends BaseResponse {
    posts: FetchPostsByUserIdResponse[];
}
export declare class FetchPostsByUserIdResponse {
    title: string;
    body: string;
}
