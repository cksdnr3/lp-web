import React, { useCallback, useState } from 'react';
import { HeartOutlined, MenuOutlined } from '@ant-design/icons';
import SearchBar from '../search-bar';
import { GlobalNavBarStyle } from './styles';
import GnbTooltips from '../tooltips';
import Category from 'src/layout/header/components/category';
import Logo from 'src/components/logo';
import { useSelector } from 'react-redux';
import { selectDevice } from 'src/features/device/device.slice';

function GlobalNavBar() {
  const { device } = useSelector(selectDevice);
  const [drop, setDrop] = useState(false);

  const toggleMenu = useCallback(() => {
    setDrop((prev) => !prev);
  }, []);

  return (
    <GlobalNavBarStyle.Wrapper>
      <GlobalNavBarStyle.Container>
        {device === 'large' && (
          <div style={{ display: 'flex', alignItems: 'cneter' }}>
            <MenuOutlined onMouseEnter={toggleMenu} style={{ fontSize: '21px', cursor: 'pointer', marginRight: 18 }} />
            {<Logo size="medium" />}
          </div>
        )}
        <SearchBar />
        <GnbTooltips />
        <GlobalNavBarStyle.Icon>
          <HeartOutlined />
        </GlobalNavBarStyle.Icon>
        <Category toggleMenu={toggleMenu} drop={drop} />
      </GlobalNavBarStyle.Container>
    </GlobalNavBarStyle.Wrapper>
  );
}

export default GlobalNavBar;
