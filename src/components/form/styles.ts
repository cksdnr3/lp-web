import styled from 'styled-components';

export namespace FormStyle {
  export const Form = styled.form`
    ${({ theme }) => theme.flexSet({ direction: 'column' })};
    min-width: 520px;
    max-width: 520px;
    background-color: #fff;
    margin: 0 auto;
    padding: 60px;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;

    & > *:not(:first-child) {
      margin-top: 30px;
    }
  `;

  export const Header = styled.div`
    font-size: 24px;
    font-weight: 600;
    text-align: left;
  `;

  export const Content = styled.div`
    & > div {
      margin-top: 8px;
    }

    & > div > label > input {
      margin-bottom: 7px;
    }
  `;

  export const Footer = styled.div``;
}
