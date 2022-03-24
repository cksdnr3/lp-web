import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { SearchBarStyle } from './styles';

function SearchBar() {
  return (
    <SearchBarStyle.Wrapper>
      <SearchBarStyle.Input placeholder="찾고 싶은 상품을 검색해보세요" />
      <SearchBarStyle.Icon>
        <SearchOutlined />
      </SearchBarStyle.Icon>
    </SearchBarStyle.Wrapper>
  );
}

export default SearchBar;
