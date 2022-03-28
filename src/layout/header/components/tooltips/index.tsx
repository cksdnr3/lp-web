import { CommentOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { RoutesUrl } from 'src/constants/routesUrl';
import { GnbTooltipsStyle } from './styles';

function GnbTooltips() {
  return (
    <GnbTooltipsStyle.Tooltips>
      <GnbTooltipsStyle.Tolltip to={RoutesUrl.PRODUCTS_NEW}>
        <ShopOutlined style={{ fontSize: '1.5rem' }} />
        <span>판매하기</span>
      </GnbTooltipsStyle.Tolltip>
      <GnbTooltipsStyle.Tolltip to={RoutesUrl.MYPAGE}>
        <UserOutlined style={{ fontSize: '1.5rem' }} />
        <span>내상점</span>
      </GnbTooltipsStyle.Tolltip>
      <GnbTooltipsStyle.Tolltip to={RoutesUrl.TALK}>
        <CommentOutlined style={{ fontSize: '1.5rem' }} />
        <span>엘피톡</span>
      </GnbTooltipsStyle.Tolltip>
    </GnbTooltipsStyle.Tooltips>
  );
}

export default GnbTooltips;
