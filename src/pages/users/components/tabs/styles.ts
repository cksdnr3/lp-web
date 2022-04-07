import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export namespace TabsStyles {
  export const Wrapper = styled.div``;

  export const Links = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center' })};
    border: 1px solid rgb(${({ theme }) => theme.palette.white[300]}, 0.4);
    border-radius: 4px 4px 0 0;

    & > a:not(:last-child) {
      border-right: 1px solid rgb(${({ theme }) => theme.palette.white[300]}, 0.4);
    }

    .active {
      background-color: rgb(${({ theme }) => theme.palette.white[300]}, 0.5);
      color: ${({ theme }) => theme.main.color('dark')};
      font-weight: 700;
    }
  `;

  export const ActiveLink = styled(NavLink)`
    flex: 1;
    background-color: rgb(${({ theme }) => theme.palette.white[300]}, 0.3);
    padding: 12px 0;
    font-size: 14px;
    text-align: center;
    color: rgb(${({ theme }) => theme.palette.white[500]});
    transition: background 0.2s;
    transition: color 0.15s;

    &:hover {
      background-color: rgb(${({ theme }) => theme.palette.white[300]}, 0.5);
      color: ${({ theme }) => theme.main.color('dark')};
      font-weight: 700;
    }
  `;
}
