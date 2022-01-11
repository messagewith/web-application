import { Module } from "@nestjs/common";
import { join } from "path";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { SessionsModule } from "./sessions/sessions.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(process.cwd(), `.env.${process.env.NODE_ENV}`),
    }),
    MongooseModule.forRoot(process.env.MESSAGEWITH_DATABASE_URI, {
      tlsCAFile:
        process.env.NODE_ENV === "production"
          ? join(process.cwd(), "certs", "ca-certificate.crt")
          : undefined,
      dbName: "messagewith",
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    UsersModule,
    SessionsModule,
    AuthModule,
  ],
})
export class AppModule {}
