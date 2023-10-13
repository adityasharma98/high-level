import { Injectable, Post } from "@nestjs/common";
import { ApiMovedPermanentlyResponse } from "@nestjs/swagger";
import { InjectRepository } from "@nestjs/typeorm";
import moment from "moment";
import { CreateNewUserRequestDTO } from "src/user/dto/user.dto";
import { Repository } from "typeorm";
import {
  CreateNewPostRequestDTO,
  FetchPostsByUserIdResponse,
  FetchPostsByUserIdResponseDTO,
} from "../dto/post.dto";
import { PostEntity } from "../entities/Post";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity, "sqlLite")
    private readonly postRepository: Repository<PostEntity>
  ) {}

  async createNewPost(createNewPostRequestDTO: CreateNewPostRequestDTO) {
    let post: PostEntity = {
      postid: null,
      title: createNewPostRequestDTO.title,
      body: createNewPostRequestDTO.body,
      userid: createNewPostRequestDTO.userId,
    };

    return await this.postRepository.save(post);
  }

  async fetchPostsByUserId(
    userId: number
  ): Promise<FetchPostsByUserIdResponseDTO> {
    let response: FetchPostsByUserIdResponseDTO = {
      posts: (
        await this.postRepository.find({ where: { userid: userId } })
      ).map((x) => {
        let post: FetchPostsByUserIdResponse = {
          title: x.title,
          body: x.body,
        };

        return post;
      }),
    };

    return response;
  }
}
