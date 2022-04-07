export interface GetCommentsRequestBody {}

export interface CommentState {
  id: number;
  profileImage: string;
  nickname: string;
  comment: string;
  reply: string[];
}
export type GetCommentsResponseBody = CommentState[];
