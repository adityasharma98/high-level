import { BaseResponse } from "../../common/dto/common.dto";

export class CreateNewUserRequestDTO {
  name: string;
  handle: string;
  dob: string;
  password: string;
}

export class CreateNewUserResponseDTO extends BaseResponse {
  userId: number;
}

export class FollowUserRequestDTO {
  userId: number;
  followUserHandle: string;
}

export class FetchFollowersByUserIdResponseDTO {
  userIds: number[];
}
