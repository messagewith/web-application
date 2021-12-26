import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { UserEntity } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserEntity, { name: "user", nullable: true })
  async user(
    @Args({ name: "id", type: () => String, nullable: true }) id: string,
    @Args({ name: "nickname", type: () => String, nullable: true })
    nickname: string,
    @Args({ name: "email", type: () => String, nullable: true })
    email: string
  ) {
    return await this.usersService.findOne({ id, nickname, email });
  }

  @Query(() => [UserEntity], { name: "allUsers" })
  async allUsers() {
    return await this.usersService.findAll();
  }

  @Mutation(() => UserEntity, { name: "createUser" })
  async createUser(@Args("userData") userData: CreateUserInput) {
    return await this.usersService.create(userData);
  }
}
