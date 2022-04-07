import React from 'react';
import { CommentState } from 'src/apis/comments/types';
import { ActivityCommentsStyles } from './styles';
import { GoComment } from 'react-icons/go';

interface ICommentProps {
  comment: CommentState;
}

function Comment({ comment }: ICommentProps) {
  return (
    <ActivityCommentsStyles.CommentWrapper>
      <ActivityCommentsStyles.ImageWrapper>
        <ActivityCommentsStyles.Image src={comment.profileImage} />
      </ActivityCommentsStyles.ImageWrapper>
      <ActivityCommentsStyles.CommentBox>
        <ActivityCommentsStyles.CommentHeader>
          <ActivityCommentsStyles.Author>{comment.nickname}</ActivityCommentsStyles.Author>
          <ActivityCommentsStyles.CreatedAt>{'13초 전'}</ActivityCommentsStyles.CreatedAt>
        </ActivityCommentsStyles.CommentHeader>
        <ActivityCommentsStyles.CommentBody>{comment.comment}</ActivityCommentsStyles.CommentBody>
        <ActivityCommentsStyles.CommentFooter>
          <ActivityCommentsStyles.ReplyButton>
            <GoComment /> &nbsp; 답글
          </ActivityCommentsStyles.ReplyButton>
        </ActivityCommentsStyles.CommentFooter>
      </ActivityCommentsStyles.CommentBox>
    </ActivityCommentsStyles.CommentWrapper>
  );
}

export default Comment;
