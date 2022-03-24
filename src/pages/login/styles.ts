import styled from 'styled-components';

export namespace LoginStyles {
  export const Wrapper = styled.div`
    padding: 100px 0px;

    ${({ theme }) => theme.media.medium`
    padding: 0;
    `}
  `;

  export const Container = styled.div`
    ${({ theme }) => theme.flexSet({ direction: 'column' })};
    background-color: rgb(${({ theme }) => theme.palette.white[100]});
    max-width: 500px;
    margin: 0 auto;
    padding: 60px;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;

    & > *:not(:last-of-type) {
      margin-bottom: 20px;
    }

    ${({ theme }) => theme.media.medium`
    height: 100vh;
    padding: 30px;
    justify-content: center;
    `}
  `;
}
