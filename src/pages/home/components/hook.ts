import { useQuery } from 'react-query';
import { ProductsApi } from 'src/apis/products';

export const useProducts = () => {
  const products = useQuery('/products', () => ProductsApi.get.products(), {});

  return {
    query: { products },
  };
};
