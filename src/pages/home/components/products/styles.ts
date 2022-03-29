import styled from 'styled-components';

export namespace ProductsStyle {
  export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
  `;
}
