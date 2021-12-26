import { Module } from "@nestjs/common";
import { join } from "path";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";
import { SessionsModule } from "./sessions/sessions.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/messagewith"),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    UsersModule,
    SessionsModule,
    AuthModule,
  ],
})
export class AppModule {}
