import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";
import { LoginUserDto } from "./dto/login-user.dto";
import { sign } from "jsonwebtoken";
import { JwtPayload } from "./jwt.strategy";
import { User, UserDocument } from "../users/schemas/user.schema";
import { SessionsService } from "../sessions/sessions.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserEntity } from "../users/entities/user.entity";
import { UsersService } from "../users/users.service";
import { compare } from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly sessionsService: SessionsService,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  private createToken(token: string): {
    accessToken: string;
    expiresIn: number;
  } {
    const payload: JwtPayload = { sessionId: token };
    const expiresIn = 60 * 60 * 24;

    const accessToken = sign(payload, process.env.MESSAGEWITH_SESSION_SECRET, {
      expiresIn,
    });

    return {
      accessToken,
      expiresIn,
    };
  }

  private async createSession(
    user: UserDocument,
    ip: string,
    userAgent: string
  ): Promise<string> {
    const session = await this.sessionsService.create({
      user,
      ip,
      userAgent,
    });

    return session.token;
  }

  async login({
    body,
    res,
    ip,
    userAgent,
    sessionId,
  }: {
    body: LoginUserDto;
    ip: string;
    userAgent: string;
    res: Response;
    sessionId?: string;
  }): Promise<void> {
    try {
      if (sessionId) {
        const session = await this.sessionsService.get(sessionId);

        if (session) {
          throw new HttpException(
            "Session is already created",
            HttpStatus.BAD_REQUEST
          );
        }
      }

      const user = await this.userModel.findOne({
        email: body.email,
      });

      if (!user || !(await compare(body.password, user.password))) {
        res.statusCode = HttpStatus.UNAUTHORIZED;
        throw new HttpException("Invalid user data", HttpStatus.UNAUTHORIZED);
      }

      const token = this.createToken(
        await this.createSession(user, ip, userAgent)
      );

      res.cookie("jwt", token.accessToken, {
        secure: false,
        domain: process.env.MESSAGEWITH_DOMAIN,
        httpOnly: true,
      });

      res.statusCode = HttpStatus.OK;
      res.json({
        statusCode: HttpStatus.OK,
        message: "",
      });
    } catch (e) {
      res.statusCode = e.status || HttpStatus.INTERNAL_SERVER_ERROR;
      res.json({
        statusCode: e.status,
        message: e.message,
      });
    }
  }

  async logout(sessionId: string, res: Response): Promise<void> {
    try {
      await this.sessionsService.clear(sessionId);

      res.clearCookie("jwt", {
        secure: false,
        domain: process.env.MESSAGEWITH_DOMAIN,
        httpOnly: true,
      });

      res.statusCode = HttpStatus.OK;
      res.json({ statusCode: HttpStatus.OK, message: "" });
    } catch (e) {
      res.json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }

  async profile(sessionId: string): Promise<UserEntity> {
    const session = await this.sessionsService.get(sessionId);

    if (!session) {
      throw new HttpException("", HttpStatus.UNAUTHORIZED);
    }

    return UsersService.transformUser(session.user);
  }
}
