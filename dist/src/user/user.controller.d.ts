import { CreateNewUserRequestDTO, CreateNewUserResponseDTO, FetchFollowersByUserIdResponseDTO, FollowUserRequestDTO } from "./dto/user.dto";
import { UserService } from "./providers/user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createNewUser(createNewUserRequestDTO: CreateNewUserRequestDTO): Promise<CreateNewUserResponseDTO>;
    followUser(followUserRequestDTO: FollowUserRequestDTO): Promise<boolean>;
    fetchFollowersByUserId(userId: number): Promise<FetchFollowersByUserIdResponseDTO>;
}
