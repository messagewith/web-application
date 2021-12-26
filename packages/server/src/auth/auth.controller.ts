import { Body, Controller, Get, Post, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { LoginUserDto } from "./dto/login-user.dto";
import { IpAddress } from "../decorators/ip-address.decorator";
import { UserAgent } from "../decorators/user-agent.decorator";
import { SessionId } from "../decorators/session-id.decorator";
import { UserGuard } from "../guards/user.guard";
import { UserEntity } from "../users/entities/user.entity";
import { SessionIdWithoutGuard } from "../decorators/session-id-without-guard.decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async login(
    @Body() body: LoginUserDto,
    @Res() res: Response,
    @IpAddress() ip: string,
    @UserAgent() userAgent: string,
    @SessionIdWithoutGuard() sessionId?: string
  ): Promise<any> {
    return this.authService.login({ body, res, ip, userAgent, sessionId });
  }

  @Get("/logout")
  @UseGuards(UserGuard)
  async logout(
    @SessionId() sessionId: string,
    @Res() res: Response
  ): Promise<any> {
    return this.authService.logout(sessionId, res);
  }

  @Get("/profile")
  @UseGuards(UserGuard)
  async profile(@SessionId() sessionId: string): Promise<UserEntity> {
    return this.authService.profile(sessionId);
  }
}
