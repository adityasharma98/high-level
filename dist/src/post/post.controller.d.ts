import { CreateNewPostRequestDTO, CreateNewPostResponseDTO, FetchPostsByUserIdResponseDTO } from "./dto/post.dto";
import { PostService } from "./providers/post.service";
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    createNewPost(createNewPostRequestDTO: CreateNewPostRequestDTO): Promise<CreateNewPostResponseDTO>;
    fetchPostsByUserId(userId: number): Promise<FetchPostsByUserIdResponseDTO>;
}
