import { Controller, Post, Body, Query, Res, Get } from "@nestjs/common";
import {
  CreateNewPostRequestDTO,
  CreateNewPostResponseDTO,
  FetchPostsByUserIdResponseDTO,
} from "./dto/post.dto";
import { PostService } from "./providers/post.service";

@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post("create-new-post")
  async createNewPost(
    @Body() createNewPostRequestDTO: CreateNewPostRequestDTO
  ): Promise<CreateNewPostResponseDTO> {
    try {
      await this.postService.createNewPost(createNewPostRequestDTO);

      let response: CreateNewPostResponseDTO = {
        isSuccess: true,
        errorMessage: null,
      };

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Get("fetch-posts-by-user-id")
  async fetchPostsByUserId(
    @Query("userId") userId: number
  ): Promise<FetchPostsByUserIdResponseDTO> {
    try {
      return await this.postService.fetchPostsByUserId(userId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
