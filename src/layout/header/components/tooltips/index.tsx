import { CommentOutlined, HomeOutlined, PlusSquareOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import React, { CSSProperties, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RoutesUrl } from 'src/constants/routesUrl';
import { selectDevice } from 'src/features/device/device.slice';
import { GnbTooltipsStyle } from './styles';

function GnbTooltips() {
  const { device } = useSelector(selectDevice);

  return (
    <GnbTooltipsStyle.Tooltips>
      <GnbTooltipsStyle.Tolltip to={RoutesUrl.PRODUCTS_NEW}>
        {device === 'large' && <ShopOutlined />}
        {(device === 'small' || device === 'medium') && <PlusSquareOutlined />}
        <div>판매하기</div>
      </GnbTooltipsStyle.Tolltip>
      <GnbTooltipsStyle.Tolltip to={RoutesUrl.MYPAGE}>
        <UserOutlined />
        <div>내상점</div>
      </GnbTooltipsStyle.Tolltip>
      <GnbTooltipsStyle.Tolltip to={RoutesUrl.TALK}>
        <CommentOutlined />
        <div>엘피톡</div>
      </GnbTooltipsStyle.Tolltip>
      {(device === 'small' || device === 'medium') && (
        <GnbTooltipsStyle.Tolltip to={RoutesUrl.HOME}>
          <HomeOutlined />
        </GnbTooltipsStyle.Tolltip>
      )}
      {(device === 'small' || device === 'medium') && (
        <GnbTooltipsStyle.Tolltip to={RoutesUrl.FOLLOWING}>
          <ShopOutlined />
        </GnbTooltipsStyle.Tolltip>
      )}
    </GnbTooltipsStyle.Tooltips>
  );
}

export default GnbTooltips;
