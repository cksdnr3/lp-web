import styled from 'styled-components';

export namespace CategoryStyle {
  export const Wrapper = styled.div`
    position: absolute;
    top: 100%;
    width: ${({ theme }) => theme.sizes.large}px;
    z-index: 12;
  `;
}
