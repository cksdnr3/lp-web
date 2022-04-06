import React from 'react';
import { ActivityLayoutStyles } from './activity.layout.styles';

function ActivityReviews() {
  return (
    <ActivityLayoutStyles.Wrapper>
      <ActivityLayoutStyles.EmptyMessage>상점후기가 없습니다.</ActivityLayoutStyles.EmptyMessage>
    </ActivityLayoutStyles.Wrapper>
  );
}

export default ActivityReviews;
