import React from 'react';
import { ActivityLayoutStyles } from './activity.layout.styles';

function ActivityLikes() {
  return (
    <ActivityLayoutStyles.Wrapper>
      <ActivityLayoutStyles.EmptyMessage>찜한 상품이 없습니다.</ActivityLayoutStyles.EmptyMessage>
    </ActivityLayoutStyles.Wrapper>
  );
}

export default ActivityLikes;
