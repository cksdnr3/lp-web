import styled from 'styled-components';

export namespace FormStyle {
  export const Form = styled.form`
    ${({ theme }) => theme.flexSet({ direction: 'column' })};
    & > *:not(:first-child) {
      margin-top: 25px;
    }
  `;

  export const Header = styled.div`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;

    p {
      font-size: 1rem;
      font-weight: 400;
      color: rgb(${({ theme }) => theme.palette.white[300]});
    }

    ${({ theme }) => theme.media.medium`
    font-size: 18px;

    p {
      font-size: 14px;
    }
    `}

    ${({ theme }) => theme.media.small`
    font-size: 18px;

    p {
      font-size: 14px;
    }
    `}
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
