import { BaseResponse } from "../../common/dto/common.dto";

export class CreateNewPostRequestDTO {
  title: string;
  body: string;
  userId: number;
}

export class CreateNewPostResponseDTO extends BaseResponse {}

export class FetchPostsByUserIdResponseDTO extends BaseResponse {
  posts: FetchPostsByUserIdResponse[];
}

export class FetchPostsByUserIdResponse {
  title: string;
  body: string;
}
