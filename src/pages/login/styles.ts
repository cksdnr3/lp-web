import styled from 'styled-components';

export namespace LoginStyles {
  export const Wrapper = styled.div`
    height: 100vh;
    padding-top: 50px;
    background-color: rgb(249, 249, 249);
  `;

  export const Container = styled.div`
    ${({ theme }) => theme.flexSet({ direction: 'column' })};
    min-width: 500px;
    max-width: 500px;
    background-color: #fff;
    margin: 0 auto;
    padding: 60px;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;

    & > *:not(:last-of-type) {
      margin-bottom: 20px;
    }
  `;
}
