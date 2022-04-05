import React from 'react';
import { IGetProductsResponseBody } from 'src/apis/products/types';
import Card from 'src/components/card';
import { addComma } from 'src/utils/number/addComma';
import { ProductsStyle } from './styles';

interface IProductsProps {
  products?: IGetProductsResponseBody[];
}

function Products({ products }: IProductsProps) {
  return (
    <ProductsStyle.Wrapper>
      {products?.map((product) => (
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
