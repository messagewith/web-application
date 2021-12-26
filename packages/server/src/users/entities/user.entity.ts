import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  nickname: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  middleName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  fullName: string;

  @Field(() => String)
  profilePicture: string;

  @Field(() => String)
  coverPhoto: string;

  @Field(() => String)
  bio: string;
}
