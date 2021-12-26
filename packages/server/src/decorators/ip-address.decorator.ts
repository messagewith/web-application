import { createParamDecorator } from "@nestjs/common";
import * as requestIp from "request-ip";

export const IpAddress = createParamDecorator((data, context) => {
  const req = context.switchToHttp().getRequest();

  let ip;
  if (req.clientIp) ip = req.clientIp;
  else ip = requestIp.getClientIp(req);

  if (ip === "::1") {
    return process.env.MESSAGEWITH_MOCKUP_IP_ADDRESS;
  }

  return ip;
});
