import { Link } from 'react-router-dom';
import styled from 'styled-components';

export namespace SearchBarStyle {
  export const Wrapper = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center' })};
    border: 2px solid ${({ theme }) => theme.main.color('light')};
    width: 460px;
    padding: 7px 15px;

    ${({ theme }) => theme.media.medium`
    ${theme.flexSet({ align: 'center' })};
    flex: 1;
    width: 100%;
    padding: 0;
    border: none;
    `};

    ${({ theme }) => theme.media.small`
    ${theme.flexSet({ align: 'center' })};
    flex: 1;
    width: 100%;
    padding: 0;
    border: none;
    `};
  `;

  export const Input = styled.input`
    width: 100%;
    padding: 0px;

    ${({ theme }) => theme.media.medium`
    width: 100%;
    padding: 11px 6px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    `}

    ${({ theme }) => theme.media.small`
    width: 100%;
    padding: 11px 6px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    `}
  `;

  export const LinkWrapper = styled(Link)`
    ${({ theme }) => theme.media.medium`
    ${theme.flexSet({ justify: 'space-between' })};
    width: 100%;
    color: rgb(${theme.palette.white[900]});
    `}

    ${({ theme }) => theme.media.small`
    ${theme.flexSet({ justify: 'space-between' })};
    width: 100%;
    color: rgb(${theme.palette.white[900]});
    `}
  `;

  export const Icon = styled.div`
    color: ${({ theme }) => theme.main.color('light')};
    font-size: 1.1rem;

    ${({ theme }) => theme.media.medium`
    ${theme.flexSet({ align: 'center', justify: 'center' })};
    width: 45px;
    font-size: 22px;
    color: rgb(${theme.palette.white[900]});
    `}

    ${({ theme }) => theme.media.small`
    ${theme.flexSet({ align: 'center', justify: 'center' })};
    width: 45px;
    font-size: 22px;
    color: rgb(${theme.palette.white[900]});
    `}
  `;
}
