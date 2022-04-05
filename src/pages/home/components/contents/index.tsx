import React from 'react';
import { useProducts } from '../hook';
import Products from '../../../../components/products';
import { ContentsStyle } from './styles';

type ContentsProps = ReturnType<typeof useProducts>;

function Contents({ query }: ContentsProps) {
  return (
    <ContentsStyle.Wrapper>
      <Products products={query.products.data} />
    </ContentsStyle.Wrapper>
  );
}

export default Contents;
