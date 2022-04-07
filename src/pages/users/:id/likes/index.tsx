import React from 'react';
import EmptyMessage from '../emty-message.component';
import { ActivityLikesStyles } from './styles';

function ActivityLikes() {
  return (
    <ActivityLikesStyles.Wrapper>
      <EmptyMessage message={'찜한 상품이 없습니다.'} />
    </ActivityLikesStyles.Wrapper>
  );
}

export default ActivityLikes;
