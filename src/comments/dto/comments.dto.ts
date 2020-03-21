import { CommentModel } from '../model';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GetCommentsRequestDto {
  @ApiPropertyOptional()
  search: string;
  @ApiPropertyOptional()
  pageIndex: number;
  @ApiPropertyOptional()
  pageSize: number;
}

export class GetCommentsResponseDto {
  @ApiProperty()
  pageIndex: number;
  @ApiProperty()
  pageSize: number;
  @ApiProperty()
  total: number;
  @ApiProperty()
  data: CommentModel[];
  @ApiProperty()
  query: GetCommentsRequestDto;
}

export class GetCommentResponseDto {
  @ApiProperty()
  total: number;
  @ApiProperty()
  data: CommentModel;
}
