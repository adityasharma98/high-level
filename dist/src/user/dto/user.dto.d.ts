import { BaseResponse } from "../../common/dto/common.dto";
export declare class CreateNewUserRequestDTO {
    name: string;
    handle: string;
    dob: string;
    password: string;
}
export declare class CreateNewUserResponseDTO extends BaseResponse {
    userId: number;
}
export declare class FollowUserRequestDTO {
    userId: number;
    followUserHandle: string;
}
export declare class FetchFollowersByUserIdResponseDTO {
    userIds: number[];
}
