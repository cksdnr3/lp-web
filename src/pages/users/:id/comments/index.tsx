import React from 'react';
import EmptyMessage from '../emty-message.component';
import CommentsBox from './comments-input.component';
import Comments from './comments.component';
import { useComments } from './hook';
import { ActivityCommentsStyles } from './styles';

function ActivityComments() {
  const comments = useComments();
  return (
    <ActivityCommentsStyles.Wrapper>
      <CommentsBox {...comments} />
      {!!comments.query.comments.data?.length ? (
        <Comments {...comments} />
      ) : (
        <EmptyMessage message={'등록된 문의가 없습니다. 첫 상품문의를 등록해보세요!'} />
      )}
    </ActivityCommentsStyles.Wrapper>
  );
}

export default ActivityComments;
