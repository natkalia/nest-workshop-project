import { UserModel } from '../models';
import { ApiProperty } from '@nestjs/swagger';

export class UserRegisterRequestDto {
  @ApiProperty({
    example: 'Piotr'
  })
  name: string;
  @ApiProperty({
    example: 'piotr@myflow.pl'
  })
  email: string;
  @ApiProperty({
    example: '123',
    description: 'Minimum 3 znaki'
  })
  password: string;
}

export class UserRegisterResponseDto {
  @ApiProperty()
  user: UserModel;
}
