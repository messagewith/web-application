import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  nickname?: string;

  @Field(() => String, { nullable: true })
  bio?: string;
}
