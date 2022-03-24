import { CommentOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { GnbTooltipsStyle } from './styles';

function GnbTooltips() {
  return (
    <GnbTooltipsStyle.Tooltips>
      <GnbTooltipsStyle.Tolltip>
        <ShopOutlined style={{ fontSize: '1.5rem' }} />
        <span>판매하기</span>
      </GnbTooltipsStyle.Tolltip>
      <GnbTooltipsStyle.Tolltip>
        <UserOutlined style={{ fontSize: '1.5rem' }} />
        <span>내상점</span>
      </GnbTooltipsStyle.Tolltip>
      <GnbTooltipsStyle.Tolltip>
        <CommentOutlined style={{ fontSize: '1.5rem' }} />
        <span>엘피톡</span>
      </GnbTooltipsStyle.Tolltip>
    </GnbTooltipsStyle.Tooltips>
  );
}

export default GnbTooltips;
