import { DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export namespace SearchBoxStyles {
  export const Wrapper = styled.div`
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    background-color: rgb(${({ theme }) => theme.palette.white[100]});
    width: 100%;
    border: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
    font-size: 14px;
  `;

  export const Header = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center' })};
    padding: 5px 15px;
    font-size: 15px;
  `;

  export const Tab = styled.div<{ selected: boolean }>`
    flex: 1;
    padding: 7px 0;
    border-bottom: 2px solid
      ${({ theme, selected }) => (selected ? theme.main.color('light') : `rgb(${theme.palette.white[300]})`)};
    text-align: center;
    color: ${({ theme, selected }) => (selected ? theme.main.color('light') : `rgb(${theme.palette.white[900]})`)};
    font-weight: 700;
  `;

  export const Contents = styled.div`
    padding: 15px 0;
  `;

  export const Content = styled.div`
    ${({ theme }) => theme.flexSet({ justify: 'space-between', align: 'center' })};
    padding: 8px 15px;
  `;

  export const ContentWrapper = styled.div`
    &:hover {
      background-color: rgb(227, 236, 248, 0.3);
    }
  `;

  export const SearchHistory = styled(Link)`
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `;

  export const DeleteButton = styled(DeleteOutlined)``;

  export const Footer = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center', justify: 'space-between' })};
    background-color: rgb(${({ theme }) => theme.palette.white[300]}, 0.3);
    padding: 5px 10px;
    font-size: 12px;
    color: rgb(${({ theme }) => theme.palette.white[500]});

    & > div {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  `;
}
