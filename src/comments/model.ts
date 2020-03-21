import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CommentModel {
  @ApiPropertyOptional()
  id: number;
  @ApiProperty({
    description: 'User name ',
    example: 'Piotr'
  })
  name: string;
}
