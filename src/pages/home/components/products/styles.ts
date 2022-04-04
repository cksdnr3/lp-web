import styled from 'styled-components';

export namespace ProductsStyle {
  export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: minmax(276px, 276px);
    gap: 9px;

    ${({ theme }) => theme.media.medium`
    grid-template-columns: repeat(2, 1fr);

    `}

    ${({ theme }) => theme.media.small`
    grid-template-columns: repeat(2, 1fr);
    // grid-template-rows: minmax(235px, 2px);

    `}
  `;
}
