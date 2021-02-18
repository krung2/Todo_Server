import { IsString } from 'class-validator';
import RequestBase from '../';

export default class LoginRequest extends RequestBase {
  @IsString()
  id!: string;

  @IsString()
  pw!: string;
}