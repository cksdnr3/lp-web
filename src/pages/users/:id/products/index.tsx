import React from 'react';
import { useQuery } from 'react-query';
import { ProductsApi } from 'src/apis/products';
import Products from 'src/components/products';
import EmptyMessage from '../emty-message.component';
import { ActivityProductsStyles } from './styles';

function ActivityProducts() {
  const { data } = useQuery('/products', () => ProductsApi.get.products());

  return (
    <ActivityProductsStyles.Wrapper>
      {!!data?.length ? <></> : <EmptyMessage message={'등록된 상품이 없습니다.'} />}
    </ActivityProductsStyles.Wrapper>
  );
}

export default ActivityProducts;
