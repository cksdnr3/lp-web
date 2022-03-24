import styled from 'styled-components';

export namespace GlobalNavBarStyle {
  export const Wrapper = styled.div`
    position: sticky;
    top: 2px;
    padding: 15px 0px 0px;
    border-bottom: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
    background-color: rgb(${({ theme }) => theme.palette.white[100]});
    z-index: 11;

    ${({ theme }) => theme.media.medium`
    padding: 0;
    border: none;
    `}
  `;

  export const Top = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center', justify: 'space-between' })};
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    ${({ theme }) => theme.media.medium`
    ${theme.flexSet({ align: 'center', justify: 'space-between' })};
    padding: 7px 11px;
    font-size: 1.2rem;
    border-bottom: 1px solid ${theme.main.color()};
    `}
  `;

  export const Bottom = styled.div`
    position: relative;
    padding: 10px 0;
    max-width: 1200px;
    margin: 0 auto;

    ${({ theme }) => theme.media.medium`
    display: none;
    `}
  `;

  export const Logo = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    font-style: italic;
    cursor: pointer;
    color: ${({ theme }) => theme.main.color()};
    ${({ theme }) => theme.media.medium`
    display: none;
    `}
  `;

  export const Icon = styled.div`
    display: none;
    ${({ theme }) => theme.media.medium`
    ${theme.flexSet({ align: 'center', justify: 'center' })};
    width: 40px;
    font-size: 1.4rem;
    `}
  `;
}
