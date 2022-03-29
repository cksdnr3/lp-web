import styled from 'styled-components';

export namespace CardStyles {
  export const Wrapper = styled.div`
    border: 1px solid rgb(${({ theme }) => theme.palette.white[300]}, 0.7);
    width: 202px;
    font-size: 14px;
  `;

  export const Image = styled.img`
    width: 200px;
    height: 200px;
  `;

  export const Title = styled.div`
    padding: 12px 6px;
  `;

  export const Description = styled.div`
    ${({ theme }) => theme.flexSet({ justify: 'space-between' })};
    padding: 8px 6px;
  `;
}
