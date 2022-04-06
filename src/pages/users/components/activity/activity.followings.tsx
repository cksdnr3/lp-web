import React from 'react';
import { ActivityLayoutStyles } from './activity.layout.styles';

function ActivityFollowings() {
  return (
    <ActivityLayoutStyles.Wrapper>
      <ActivityLayoutStyles.EmptyMessage>아직 팔로우 한 사람이 없습니다.</ActivityLayoutStyles.EmptyMessage>
    </ActivityLayoutStyles.Wrapper>
  );
}

export default ActivityFollowings;
