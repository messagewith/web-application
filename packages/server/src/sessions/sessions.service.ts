import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Session, SessionDocument } from "./schemas/session.schema";
import { Model } from "mongoose";
import { UserDocument } from "../users/schemas/user.schema";
import * as UAParser from "ua-parser-js";
import { v4 as uuid } from "uuid";
import * as geoip from "geoip-lite";

@Injectable()
export class SessionsService {
  constructor(
    @InjectModel(Session.name) private sessionModel: Model<SessionDocument>
  ) {}

  async create(args: {
    user: UserDocument;
    userAgent: string;
    ip: string;
  }): Promise<SessionDocument> {
    const session = new Session();
    session.user = args.user;
    session.userAgent = args.userAgent || "unknown";
    session.date = new Date();
    session.token = uuid();

    const { os, browser, device } = UAParser(args.userAgent);
    session.os = `${os.name}${os.version ? " " + os.version : ""}`;
    session.browser = browser.name;
    session.device = device.vendor
      ? `${device.vendor}${device.model ? " " + device.model : ""}`
      : "unknown";

    const { ll, country, region, eu, timezone, city, metro, area } =
      geoip.lookup(args.ip) || {};
    session.location = {
      lat: ll[0],
      lng: ll[1],
      area,
      country,
      region,
      eu,
      timezone,
      metro,
      city,
    };

    return await this.sessionModel.create(session);
  }

  async clear(token: string): Promise<void> {
    const session = await this.sessionModel.findOne({ token });

    if (!session) {
      throw new HttpException("User is not logged in", HttpStatus.BAD_REQUEST);
    }

    await session.deleteOne();
  }

  async get(token: string): Promise<SessionDocument> {
    return this.sessionModel.findOne({ token }).populate("user").exec();
  }
}
