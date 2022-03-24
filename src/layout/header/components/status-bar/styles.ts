import styled from 'styled-components';

export namespace StatusBarStyle {
  export const Wrapper = styled.div`
    border-bottom: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
    font-size: 12px;
  `;
  export const Container = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center', justify: 'space-between' })};
    max-width: 1200px;
    padding: 8px 0;
    margin: 0 auto;
    ${({ theme }) => theme.media.medium`
    display: none;
    padding: 0px;
    `}
  `;

  export const Status = styled.div`
    ${({ theme }) => theme.flexSet({})};
    & > *:not(:first-of-type) {
      margin-left: 25px;
    }

    a:hover {
      color: rgba(96, 154, 233);
    }
  `;
}
