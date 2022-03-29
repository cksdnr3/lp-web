import React from 'react';
import Card from 'src/components/card';
import { addComma } from 'src/utils/number/addComma';
import { useProducts } from '../hook';
import { ProductsStyle } from './styles';

type ProductsProps = ReturnType<typeof useProducts>;

function Products({ query }: ProductsProps) {
  return (
    <ProductsStyle.Wrapper>
      {query.products.data?.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          image={product.image}
          description={{ left: `${addComma(product.price)}원`, right: `${product.updatedAt}` }}
        />
      ))}
    </ProductsStyle.Wrapper>
  );
}

export default Products;
