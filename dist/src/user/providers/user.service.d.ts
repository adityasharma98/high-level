import { Repository } from "typeorm";
import { CreateNewUserRequestDTO, FetchFollowersByUserIdResponseDTO, FollowUserRequestDTO } from "../dto/user.dto";
import { Followers } from "../entities/Followers";
import { UserEntity } from "../entities/User";
export declare class UserService {
    private readonly userRepository;
    private readonly followersRepository;
    constructor(userRepository: Repository<UserEntity>, followersRepository: Repository<Followers>);
    createNewUser(createNewUserRequestDTO: CreateNewUserRequestDTO): Promise<number>;
    validateNewUserRequest(createNewUserRequestDTO: CreateNewUserRequestDTO): Promise<void>;
    followUser(followUserRequestDTO: FollowUserRequestDTO): Promise<boolean>;
    fetchFollowersByUserId(userId: number): Promise<FetchFollowersByUserIdResponseDTO>;
}
