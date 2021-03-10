import { IsNotEmpty, IsString } from "class-validator";
import RequestBase from "..";

export default class PostRequest extends RequestBase {
  @IsString()
  @IsNotEmpty()
  content!: string;
}