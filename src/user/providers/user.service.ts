import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as moment from "moment";
import { Company } from "src/user/entities/Company";
import { Repository } from "typeorm";
import {
  CreateNewUserRequestDTO,
  FetchFollowersByUserIdResponseDTO,
  FollowUserRequestDTO,
} from "../dto/user.dto";
import { Followers } from "../entities/Followers";
import { UserEntity } from "../entities/User";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity, "sqlLite")
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(Followers, "sqlLite")
    private readonly followersRepository: Repository<Followers>
  ) {}

  async createNewUser(createNewUserRequestDTO: CreateNewUserRequestDTO) {
    await this.validateNewUserRequest(createNewUserRequestDTO);

    let user: UserEntity = {
      userid: null,
      name: createNewUserRequestDTO.name,
      handle: createNewUserRequestDTO.handle,
      dob: createNewUserRequestDTO.dob,
      password: createNewUserRequestDTO.password,
    };

    return (await this.userRepository.save(user)).userid;
  }

  async validateNewUserRequest(
    createNewUserRequestDTO: CreateNewUserRequestDTO
  ) {
    let response = await this.userRepository.find({
      where: { handle: createNewUserRequestDTO.handle },
    });

    let handleAlreadyExists =
      (
        await this.userRepository.find({
          where: { handle: createNewUserRequestDTO.handle },
        })
      )?.length > 0;

    if (handleAlreadyExists) {
      throw new HttpException("Handle already exists", HttpStatus.BAD_REQUEST);
    }

    if (createNewUserRequestDTO.name.length > 20) {
      throw new HttpException(
        "Name should be less than 20 characters",
        HttpStatus.BAD_REQUEST
      );
    }

    let a = moment();
    let b = moment(createNewUserRequestDTO.dob, "YYYY-MM-DDTHH:mm:ss");
    var yearDiff = a.diff(b, "years");

    if (yearDiff < 18) {
      throw new HttpException(
        "Age should be more than 18 yrs",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async followUser(
    followUserRequestDTO: FollowUserRequestDTO
  ): Promise<boolean> {
    let userToFollow = await this.userRepository.find({
      where: { handle: followUserRequestDTO.followUserHandle },
    });

    if (!userToFollow || userToFollow.length == 0) {
      throw new HttpException(
        "User handle is not valid.",
        HttpStatus.BAD_REQUEST
      );
    }

    let currentUser = await this.userRepository.find({
      where: { userid: followUserRequestDTO.userId },
    });

    if (!currentUser || currentUser.length == 0) {
      throw new HttpException(
        "Invalid user making request.",
        HttpStatus.BAD_REQUEST
      );
    }

    let followersObject: Followers = {
      id: null,
      primaryuserid: followUserRequestDTO.userId,
      secondaryuserid: userToFollow[0].userid,
    };

    this.followersRepository.save(followersObject);

    return true;
  }

  async fetchFollowersByUserId(
    userId: number
  ): Promise<FetchFollowersByUserIdResponseDTO> {
    let response: FetchFollowersByUserIdResponseDTO = {
      userIds: (
        await this.followersRepository.find({
          where: { primaryuserid: userId },
        })
      ).map((x) => x.secondaryuserid),
    };

    return response;
  }
}
