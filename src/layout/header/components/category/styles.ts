import styled from 'styled-components';

export namespace CategoryStyle {
  export const Wrapper = styled.div`
    position: absolute;
    top: 45px;
    border: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
  `;
}
