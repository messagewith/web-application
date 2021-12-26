import { createParamDecorator } from "@nestjs/common";
import { verify } from "jsonwebtoken";

export const SessionIdWithoutGuard = createParamDecorator((data, context) => {
  const req = context.switchToHttp().getRequest();

  return req && req.cookies?.jwt
    ? (verify(req.cookies.jwt, process.env.MESSAGEWITH_JWT_SECRET) as any)
        ?.sessionId
    : null;
});
