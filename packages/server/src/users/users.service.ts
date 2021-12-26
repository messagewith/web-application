import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "./dto/create-user.input";
import { UserEntity } from "./entities/user.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { hashPassword } from "../utils/hashPassword";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  static transformUser({
    firstName,
    lastName,
    middleName,
    nickname,
    bio,
    coverPhoto,
    profilePicture,
    _id,
    email,
  }: UserDocument): UserEntity {
    return {
      id: _id,
      nickname,
      firstName,
      lastName,
      middleName,
      bio,
      coverPhoto,
      profilePicture,
      fullName: `${firstName} ${middleName ? middleName + " " : ""}${lastName}`,
      email,
    };
  }

  async create({
    nickname,
    middleName,
    lastName,
    firstName,
    password,
    bio,
    email,
  }: CreateUserInput) {
    const user = new User();

    if (nickname && (await this.userModel.findOne({ nickname }))) {
      throw new Error("This nickname is already in use");
    }

    let i = 0;
    let newNickname: string;
    const firstNameAndLastName = `${firstName.toLowerCase()}_${lastName.toLowerCase()}`;
    let tempNickname: string;

    do {
      if (i === 0) {
        tempNickname = firstNameAndLastName;
      } else {
        tempNickname = `${firstNameAndLastName}_${i + 1}`;
      }

      if (!(await this.userModel.findOne({ nickname: tempNickname }))) {
        newNickname = tempNickname;
      }

      i++;
    } while (!newNickname);

    user.nickname = newNickname;
    user.firstName = firstName;
    user.lastName = lastName;
    user.middleName = middleName || "";
    user.password = await hashPassword(password);
    user.bio = bio || "";
    user.coverPhoto = "";
    user.profilePicture = "";
    user.email = email;

    return UsersService.transformUser(await this.userModel.create(user));
  }

  async findAll(): Promise<UserEntity[]> {
    return (await this.userModel.find()).map(UsersService.transformUser);
  }

  async findOne({
    id,
    nickname,
    email,
  }: {
    id?: string;
    nickname?: string;
    email?: string;
  }): Promise<UserEntity | null> {
    const user = id
      ? await this.userModel.findById(id)
      : await this.userModel.findOne({ nickname, email });

    if (!user) {
      return null;
    }

    return UsersService.transformUser(user);
  }

  async findOnePlaneDocument({
    nickname,
    email,
  }: {
    nickname?: string;
    email?: string;
  }): Promise<UserDocument | null> {
    const user = await this.userModel.findOne({ nickname, email });

    if (!user) {
      return null;
    }

    return user;
  }
}
