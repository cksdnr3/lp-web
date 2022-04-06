import { SendOutlined } from '@ant-design/icons';
import React from 'react';
import { ActivityCommentsStyles } from './activity.comments.styles';
import { ActivityLayoutStyles } from './activity.layout.styles';

function ActivityComments() {
  return (
    <ActivityLayoutStyles.Wrapper>
      <ActivityCommentsStyles.CommentsBox>
        <textarea style={{ width: '100%' }} />
        <ActivityCommentsStyles.Toolbox>
          <ActivityCommentsStyles.TextCounter>0 / 100</ActivityCommentsStyles.TextCounter>
          <ActivityCommentsStyles.RegisterButton>
            <SendOutlined /> 보내기
          </ActivityCommentsStyles.RegisterButton>
        </ActivityCommentsStyles.Toolbox>
      </ActivityCommentsStyles.CommentsBox>
      <ActivityLayoutStyles.EmptyMessage>
        등록된 문의가 없습니다. 첫 상품문의를 등록해보세요!
      </ActivityLayoutStyles.EmptyMessage>
    </ActivityLayoutStyles.Wrapper>
  );
}

export default ActivityComments;
