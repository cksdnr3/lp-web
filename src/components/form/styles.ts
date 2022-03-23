import styled from 'styled-components';

export namespace FormStyle {
  export const Form = styled.form`
    ${({ theme }) => theme.flexSet({ direction: 'column' })};
    & > *:not(:first-child) {
      margin-top: 25px;
    }
  `;

  export const Header = styled.div`
    font-size: 24px;
    font-weight: 600;
    text-align: left;
  `;

  export const Content = styled.div`
    & > div:not(:first-of-type) {
      margin-top: 13px;
    }

    & > div > label > input {
      margin-bottom: 7px;
    }
  `;

  export const Footer = styled.div``;
}
