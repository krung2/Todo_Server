import { IsString } from "class-validator";
import RequestBase from "../";

export default class RegisterRequest extends RequestBase {
  @IsString()
  id!: string;

  @IsString()
  pw!: string;

  @IsString()
  name!: string;
}