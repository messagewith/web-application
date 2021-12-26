import { HttpStatus } from "@nestjs/common";

export interface AuthResponse {
  statusCode: HttpStatus;
  message: string;
}
