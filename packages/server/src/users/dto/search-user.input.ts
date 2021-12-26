import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String, { nullable: true })
  middleName: string;

  @Field(() => String, { nullable: true })
  nickname: string;
}
