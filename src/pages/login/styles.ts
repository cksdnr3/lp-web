import styled from 'styled-components';

export namespace LoginStyles {
  export const Wrapper = styled.div`
    height: 100vh;
    padding-top: 50px;
    background-color: rgb(249, 249, 249);
  `;

  export const Form = styled.form`
    ${({ theme }) => theme.flexSet({ direction: 'column' })};
    min-width: 570px;
    max-width: 570px;
    background-color: #fff;
    margin: 0 auto;
    padding: 60px;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;

    & > *:not(:first-child) {
      margin-top: 20px;
    }
  `;

  export const Heading = styled.h1`
    font-size: 30px;
    font-weight: bold;
  `;

  export const InputContainer = styled.div`
    & > label:not(:last-of-type) > input {
      margin-bottom: 20px;
    }
  `;

  export const Button = styled.button`
    width: 100%;
    border-radius: 6px;
    padding: 30px 0px;
    background-color: rgb(216, 12, 24);
    text-align: center;
    font-weight: 600;
    font-size: 1.125rem;
    color: #fff;
    cursor: pointer;
    transition: background 0.25s;

    &:hover {
      background-color: rgba(216, 12, 24, 0.7);
    }
  `;
}
