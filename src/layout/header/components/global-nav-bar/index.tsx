import React from 'react';
import { HeartOutlined, MenuOutlined } from '@ant-design/icons';
import SearchBar from '../search-bar';
import { GlobalNavBarStyle } from './styles';
import GnbTooltips from '../tooltips';
import Category from 'src/layout/header/components/category';
import Logo from 'src/components/logo';

function GlobalNavBar() {
  return (
    <GlobalNavBarStyle.Wrapper>
      <GlobalNavBarStyle.Top>
        <Logo size="medium" />
        <SearchBar />
        <GnbTooltips />
        <GlobalNavBarStyle.Icon>
          <HeartOutlined />
        </GlobalNavBarStyle.Icon>
      </GlobalNavBarStyle.Top>
      <GlobalNavBarStyle.Bottom>
        <MenuOutlined style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
        <Category />
      </GlobalNavBarStyle.Bottom>
    </GlobalNavBarStyle.Wrapper>
  );
}

export default GlobalNavBar;
