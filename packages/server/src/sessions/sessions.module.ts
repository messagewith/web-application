import { Module } from "@nestjs/common";
import { SessionsService } from "./sessions.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Session, SessionSchema } from "./schemas/session.schema";

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Session.name,
        useFactory: () => {
          const schema = SessionSchema;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require("mongoose-autopopulate"));
          return schema;
        },
      },
    ]),
  ],
  providers: [SessionsService],
  exports: [SessionsService],
})
export class SessionsModule {}
