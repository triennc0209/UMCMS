import { IsNotEmpty } from 'class-validator';

export class UpdateCommentDto {
  @IsNotEmpty()
  comment_id: string;

  @IsNotEmpty()
  comment_content: string;

  @IsNotEmpty()
  submission_date: Date;
}