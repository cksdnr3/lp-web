import React from 'react';
import { useQuery } from 'react-query';
import { ProductsApi } from 'src/apis/products';
import Products from 'src/components/products';
import { ActivityLayoutStyles } from './activity.layout.styles';

function ActivityProducts() {
  const { data } = useQuery('/products', () => ProductsApi.get.products());

  return (
    <ActivityLayoutStyles.Wrapper>
      {!!data?.length ? <Products products={data} /> : <div>등록된 상품이 없습니다.</div>}
    </ActivityLayoutStyles.Wrapper>
  );
}

export default ActivityProducts;
