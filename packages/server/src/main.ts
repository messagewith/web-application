import * as dotenv from "dotenv";
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import * as fs from "fs";
import * as cors from "cors";
import * as path from "path";
import { AppModule } from "./app.module";

dotenv.config({
  path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`),
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions:
      process.env.NODE_ENV === "production"
        ? {
            key: fs.readFileSync(path.join(process.cwd(), "certs", "key.pem")),
            cert: fs.readFileSync(
              path.join(process.cwd(), "certs", "cert.pem")
            ),
            ca: fs.readFileSync(path.join(process.cwd(), "certs", "chain.pem")),
          }
        : undefined,
  });

  app.use(cookieParser());
  app.use(cors({ credentials: true, origin: true }));

  await app.listen(8080);
}
bootstrap();
