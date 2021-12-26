import { Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { SessionsService } from "../sessions/sessions.service";

export interface JwtPayload {
  sessionId: string;
}

function cookieExtractor(req: any): null | string {
  return req && req.cookies ? req.cookies?.jwt : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly sessionsService: SessionsService) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.MESSAGEWITH_JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload, done: (error, session) => void) {
    if (!payload || !payload.sessionId) {
      return done(new UnauthorizedException(), false);
    }

    const session = await this.sessionsService.get(payload.sessionId);
    if (!session) {
      return done(new UnauthorizedException(), false);
    }

    done(null, { sessionId: session.token, user: session.user });
  }
}
