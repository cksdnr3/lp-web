import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export namespace UserStyles {
  export const Wrapper = styled.div`
    /* border: 1px solid rgb(${({ theme }) => theme.palette.white[300]}, 0.4); */
  `;

  export const ActivityLayout = styled.div`
    position: relative;
    margin-top: 20px;
    min-height: 320px;

    & > div {
      margin-bottom: 17px;
    }
  `;

  export const EmptyMessage = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    font-size: 16px;
    margin-top: 30px;
    color: rgb(${({ theme }) => theme.palette.white[300]});
  `;
}
