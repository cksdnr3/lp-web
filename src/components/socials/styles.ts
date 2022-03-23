import styled from 'styled-components';

export namespace SocialsStyle {
  export const Wrapper = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center', justify: 'center' })};

    & > a {
      box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
    }

    & > a:not(:last-of-type) {
      margin-right: 20px;
    }
  `;
}
