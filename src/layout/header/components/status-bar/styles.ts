import styled from 'styled-components';

export namespace StatusBarStyle {
  export const Wrapper = styled.div`
    border-bottom: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
    * {
      font-size: 12px;
    }
  `;
  export const Container = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center', justify: 'space-between' })};
    position: relative;
    max-width: ${({ theme }) => theme.sizes.large}px;
    padding: 8px 0;
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

    & > *:not(:first-child) {
      margin-left: 25px;
    }

    *:hover {
      color: rgba(96, 154, 233);
    }
  `;

  export const NotificationBox = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 300px;
    z-index: 1000;
  `;

  export const Button = styled.button``;
}
