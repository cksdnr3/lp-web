import React from 'react';
import { ActivityLayoutStyles } from './activity.layout.styles';

function ActivityFollowers() {
  return (
    <ActivityLayoutStyles.Wrapper>
      <ActivityLayoutStyles.EmptyMessage>아직 이 상점을 팔로우 한 사람이 없습니다.</ActivityLayoutStyles.EmptyMessage>
    </ActivityLayoutStyles.Wrapper>
  );
}

export default ActivityFollowers;
