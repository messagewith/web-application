// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.use(cors({ credentials: true, origin: true }));

  await app.listen(8080);
}
bootstrap();
