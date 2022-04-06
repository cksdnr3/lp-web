import styled from 'styled-components';

export namespace StatusBarStyle {
  export const Wrapper = styled.div`
    border-bottom: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
    background-color: rgb(${({ theme }) => theme.palette.white[100]});
    * {
      font-size: 12px;
    }
  `;
  export const Container = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center', justify: 'space-between' })};
    position: relative;
    max-width: ${({ theme }) => theme.sizes.large}px;
    /* padding: 8px 0; */
    height: 25px;
    margin: 0 auto;

    ${({ theme }) => theme.media.medium`
    display: none;
    padding: 0px;
    `}

    ${({ theme }) => theme.media.small`
    display: none;
    padding: 0px;
    `}
  `;

  export const Status = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center' })};
    height: 100%;

    & > *:not(:first-child) {
      margin-left: 25px;
    }
  `;

  export const Button = styled.button`
    &:hover {
      color: rgba(96, 154, 233);
    }
  `;

  export const Dropdown = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center' })};
    cursor: pointer;
    position: relative;
    height: 100%;

    & > span:hover {
      color: rgba(96, 154, 233);
    }
  `;
}
