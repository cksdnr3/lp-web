import styled from 'styled-components';

export namespace ActivityCommentsStyles {
  export const CommentsBox = styled.div`
    border: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
    padding-top: 17px;
  `;

  export const Toolbox = styled.div`
    ${({ theme }) => theme.flexSet({ justify: 'space-between', align: 'center' })};
    padding: 9px 17px;
    border-top: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
  `;

  export const TextCounter = styled.div`
    font-size: 13px;
    color: rgb(${({ theme }) => theme.palette.white[500]});
  `;

  export const RegisterButton = styled.button``;
}
