import React from 'react';
import EmptyMessage from '../emty-message.component';
import { ActivityFollowersStyles } from './styles';

function ActivityFollowers() {
  return (
    <ActivityFollowersStyles.Wrapper>
      <EmptyMessage message={'아직 이 상점을 팔로우 한 사람이 없습니다.'} />
    </ActivityFollowersStyles.Wrapper>
  );
}

export default ActivityFollowers;
