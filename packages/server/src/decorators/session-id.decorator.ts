import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const SessionId = createParamDecorator(
  (data, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    return req.user?.sessionId;
  }
);
