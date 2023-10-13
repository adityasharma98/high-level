import {
  Controller,
  Post,
  Body,
  Query,
  Res,
  Get,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import {
  CreateNewUserRequestDTO,
  CreateNewUserResponseDTO,
  FetchFollowersByUserIdResponseDTO,
  FollowUserRequestDTO,
} from "./dto/user.dto";
import { UserService } from "./providers/user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create-new-user")
  async createNewUser(
    @Body() createNewUserRequestDTO: CreateNewUserRequestDTO
  ): Promise<CreateNewUserResponseDTO> {
    try {
      let userId = await this.userService.createNewUser(
        createNewUserRequestDTO
      );

      let response: CreateNewUserResponseDTO = {
        userId: userId,
        isSuccess: true,
        errorMessage: null,
      };

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Post("follow-user")
  async followUser(
    @Body() followUserRequestDTO: FollowUserRequestDTO
  ): Promise<boolean> {
    try {
      let success = await this.userService.followUser(followUserRequestDTO);

      return success;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Get("fetch-followes-by-user-id")
  async fetchFollowersByUserId(
    @Query("userId") userId: number
  ): Promise<FetchFollowersByUserIdResponseDTO> {
    try {
      return await this.userService.fetchFollowersByUserId(userId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
