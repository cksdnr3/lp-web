import React from 'react';
import EmptyMessage from '../emty-message.component';
import { ActivityFollowingsStyles } from './styles';

function ActivityFollowings() {
  return (
    <ActivityFollowingsStyles.Wrapper>
      <EmptyMessage message={'아직 팔로우 한 사람이 없습니다.'} />
    </ActivityFollowingsStyles.Wrapper>
  );
}

export default ActivityFollowings;
