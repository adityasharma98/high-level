import { Repository } from "typeorm";
import { CreateNewPostRequestDTO, FetchPostsByUserIdResponseDTO } from "../dto/post.dto";
import { PostEntity } from "../entities/Post";
export declare class PostService {
    private readonly postRepository;
    constructor(postRepository: Repository<PostEntity>);
    createNewPost(createNewPostRequestDTO: CreateNewPostRequestDTO): Promise<PostEntity>;
    fetchPostsByUserId(userId: number): Promise<FetchPostsByUserIdResponseDTO>;
}
