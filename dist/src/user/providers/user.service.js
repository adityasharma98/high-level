"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const moment = require("moment");
const typeorm_2 = require("typeorm");
const Followers_1 = require("../entities/Followers");
const User_1 = require("../entities/User");
let UserService = class UserService {
    constructor(userRepository, followersRepository) {
        this.userRepository = userRepository;
        this.followersRepository = followersRepository;
    }
    async createNewUser(createNewUserRequestDTO) {
        await this.validateNewUserRequest(createNewUserRequestDTO);
        let user = {
            userid: null,
            name: createNewUserRequestDTO.name,
            handle: createNewUserRequestDTO.handle,
            dob: createNewUserRequestDTO.dob,
            password: createNewUserRequestDTO.password,
        };
        return (await this.userRepository.save(user)).userid;
    }
    async validateNewUserRequest(createNewUserRequestDTO) {
        var _a;
        let response = await this.userRepository.find({
            where: { handle: createNewUserRequestDTO.handle },
        });
        let handleAlreadyExists = ((_a = (await this.userRepository.find({
            where: { handle: createNewUserRequestDTO.handle },
        }))) === null || _a === void 0 ? void 0 : _a.length) > 0;
        if (handleAlreadyExists) {
            throw new common_1.HttpException("Handle already exists", common_1.HttpStatus.BAD_REQUEST);
        }
        if (createNewUserRequestDTO.name.length > 20) {
            throw new common_1.HttpException("Name should be less than 20 characters", common_1.HttpStatus.BAD_REQUEST);
        }
        let a = moment();
        let b = moment(createNewUserRequestDTO.dob, "YYYY-MM-DDTHH:mm:ss");
        var yearDiff = a.diff(b, "years");
        if (yearDiff < 18) {
            throw new common_1.HttpException("Age should be more than 18 yrs", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async followUser(followUserRequestDTO) {
        let userToFollow = await this.userRepository.find({
            where: { handle: followUserRequestDTO.followUserHandle },
        });
        if (!userToFollow || userToFollow.length == 0) {
            throw new common_1.HttpException("User handle is not valid.", common_1.HttpStatus.BAD_REQUEST);
        }
        let currentUser = await this.userRepository.find({
            where: { userid: followUserRequestDTO.userId },
        });
        if (!currentUser || currentUser.length == 0) {
            throw new common_1.HttpException("Invalid user making request.", common_1.HttpStatus.BAD_REQUEST);
        }
        let followersObject = {
            id: null,
            primaryuserid: followUserRequestDTO.userId,
            secondaryuserid: userToFollow[0].userid,
        };
        this.followersRepository.save(followersObject);
        return true;
    }
    async fetchFollowersByUserId(userId) {
        let response = {
            userIds: (await this.followersRepository.find({
                where: { primaryuserid: userId },
            })).map((x) => x.secondaryuserid),
        };
        return response;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(User_1.UserEntity, "sqlLite")),
    __param(1, (0, typeorm_1.InjectRepository)(Followers_1.Followers, "sqlLite")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map