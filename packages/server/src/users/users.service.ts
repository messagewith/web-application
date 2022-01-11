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

  private async createNickname(
    firstName: string,
    lastName: string,
    nickname?: string
  ): Promise<string> {
    if (nickname && (await this.userModel.findOne({ nickname }))) {
      throw new Error("This nickname is already in use");
    }

    if (nickname) {
      return nickname;
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

    return newNickname;
  }

  transformUser({
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

    user.nickname = await this.createNickname(firstName, lastName, nickname);
    user.firstName = firstName;
    user.lastName = lastName;
    user.middleName = middleName || "";
    user.password = await hashPassword(password);
    user.bio = bio || "";
    user.coverPhoto = "";
    user.profilePicture = "";
    user.email = email;

    return this.transformUser(await this.userModel.create(user));
  }

  async findAll(): Promise<UserEntity[]> {
    return (await this.userModel.find()).map(this.transformUser);
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

    return this.transformUser(user);
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
