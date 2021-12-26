import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  nickname: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  firstName: string;

  @Prop()
  middleName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  profilePicture: string;

  @Prop()
  coverPhoto: string;

  @Prop()
  bio: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
