import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductsStyle } from './styles';

function Products() {
  const [searchParams] = useSearchParams();
  return <ProductsStyle.Wrapper>products {searchParams.get('q')}</ProductsStyle.Wrapper>;
}

export default Products;
