import React from 'react';
import EmptyMessage from '../emty-message.component';
import { ActivityReviewsStyles } from './styles';

function ActivityReviews() {
  return (
    <ActivityReviewsStyles.Wrapper>
      <EmptyMessage message={'상점후기가 없습니다.'} />
    </ActivityReviewsStyles.Wrapper>
  );
}

export default ActivityReviews;
