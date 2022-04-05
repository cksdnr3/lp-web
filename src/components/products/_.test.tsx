import '@testing-library/jest-dom';
import { render } from 'src/utils/test/render';
import Products from '.';

import { products } from '../../../__fixtures__/products';

describe('<Products />', () => {
  it('Render - <Products />', () => {
    const { container } = render(<Products products={products} />);

    products.forEach((product) => {
      expect(container).toHaveTextContent(product.title);
      expect(container).toHaveTextContent(product.title);
    });
  });
});
