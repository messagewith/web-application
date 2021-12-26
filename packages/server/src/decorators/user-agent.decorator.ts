import { createParamDecorator } from "@nestjs/common";

export const UserAgent = createParamDecorator((data, context) => {
  return context.switchToHttp().getRequest().headers["user-agent"];
});
