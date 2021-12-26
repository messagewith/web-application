import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongoSchema } from "mongoose";
import { User, UserDocument } from "../../users/schemas/user.schema";

export type SessionDocument = Session & Document;

@Schema()
export class Session {
  @Prop({ required: true, unique: true })
  token: string;

  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: "User",
    required: true,
  })
  user: UserDocument;

  @Prop({ required: true })
  userAgent: string;

  @Prop({
    type: raw({
      lat: { type: Number },
      lng: { type: Number },
      area: { type: Number },
      country: { type: String },
      region: { type: String },
      city: { type: String },
      eu: { type: String },
      timezone: { type: String },
      metro: { type: String },
    }),
    required: true,
  })
  location: Record<string, any>;

  @Prop({ required: true })
  browser: string;

  @Prop({ required: true })
  os: string;

  @Prop({ required: true })
  device: string;

  @Prop({ type: Date, required: true })
  date: Date;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
