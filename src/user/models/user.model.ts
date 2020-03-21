import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

export enum UserRole {
  ADMIN = 'admin',
  ROOT = 'root',
}

export class UserModel {
  @ApiPropertyOptional()
  id?: number;
  @ApiProperty({
    example: 'piotr'
  })
  name: string;
  @ApiPropertyOptional({
    example: 'piotr@myflow.pl'
  })
  email?: string;
  @ApiPropertyOptional({
    example: '123',
    description: 'Hasło wymaga minimum 3 znaków'
  })
  password?: string;
  @ApiPropertyOptional({enum: UserRole})
  roles?: UserRole[];
}
