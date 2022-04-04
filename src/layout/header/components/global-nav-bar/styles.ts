import styled from 'styled-components';

export namespace GlobalNavBarStyle {
  export const Wrapper = styled.div`
    position: sticky;
    top: 0px;
    padding: 15px 0px;
    border-bottom: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
    background-color: rgb(${({ theme }) => theme.palette.white[100]});
    z-index: 11;

    ${({ theme }) => theme.media.medium`
    padding: 0;
    border: none;
    `}

    ${({ theme }) => theme.media.small`
    padding: 0;
    border: none;
    `}
  `;

  export const Container = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center', justify: 'space-between' })};
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;

    ${({ theme }) => theme.media.medium`
    ${theme.flexSet({ align: 'center', justify: 'space-between' })};
    padding: 7px 0px;
    border-bottom: 1px solid ${theme.main.color()};
    `}

    ${({ theme }) => theme.media.small`
    ${theme.flexSet({ align: 'center', justify: 'space-between' })};
    padding: 7px 0px;
    border-bottom: 1px solid ${theme.main.color()};
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

    ${({ theme }) => theme.media.small`
    display: none;
    `}
  `;

  export const Icon = styled.div`
    display: none;

    ${({ theme }) => theme.media.medium`
    ${theme.flexSet({ align: 'center', justify: 'center' })};
    width: 40px;
    font-size: 24px;
    `}

    ${({ theme }) => theme.media.small`
    ${theme.flexSet({ align: 'center', justify: 'center' })};
    width: 40px;
    font-size: 22px;
    `}
  `;
}
