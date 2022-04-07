import React from 'react';
import Comment from './comment.component';
import { useComments } from './hook';
import { ActivityCommentsStyles } from './styles';

type CommentsProps = ReturnType<typeof useComments>;

function Comments({ query }: CommentsProps) {
  return (
    <ActivityCommentsStyles.CommentsWrapper>
      {query.comments.data?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ActivityCommentsStyles.CommentsWrapper>
  );
}

export default Comments;
