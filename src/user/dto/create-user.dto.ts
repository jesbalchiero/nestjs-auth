import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  /**
   * Email is necessary to realize the login
   * @example example@example.com
   */
  @IsEmail()
  email: string;

  /**
   * Password is necessary to realize the login
   * @example Password@123
   */
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  /**
   * Name is used to show the data of the user
   * @example Jean Sbalchiero
   */
  @IsString()
  name: string;
}
