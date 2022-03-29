import React from 'react';
import { useProducts } from '../hook';
import Products from '../products';
import { ContentsStyle } from './styles';

function Contents() {
  return (
    <ContentsStyle.Wrapper>
      <Products {...useProducts()} />
    </ContentsStyle.Wrapper>
  );
}

export default Contents;
