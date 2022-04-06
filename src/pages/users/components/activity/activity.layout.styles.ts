import styled from 'styled-components';

export namespace ActivityLayoutStyles {
  export const Wrapper = styled.div`
    margin-top: 20px;

    & > div {
      margin-bottom: 17px;
    }
  `;

  export const CurrentTab = styled.div`
    font-size: 18px;
    font-weight: 400;
    padding: 5px 0;
    border-bottom: 1px solid rgb(${({ theme }) => theme.palette.white[300]});

    & > span {
      color: ${({ theme }) => theme.main.color('dark')};
    }
  `;

  export const EmptyMessage = styled.div`
    font-size: 16px;
    margin-top: 30px;
    color: rgb(${({ theme }) => theme.palette.white[300]});
  `;
}
