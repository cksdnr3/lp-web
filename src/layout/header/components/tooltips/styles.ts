import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export namespace GnbTooltipsStyle {
  const order = (to: string) => {
    switch (to) {
      case '/': {
        return css`
          order: 0;
        `;
      }
      case '/followings': {
        return css`
          order: 1;
        `;
      }
      case '/products/new': {
        return css`
          order: 2;
        `;
      }
      case '/talk': {
        return css`
          order: 3;
        `;
      }
      case '/mypage': {
        return css`
          order: 4;
        `;
      }
      default: {
        return css``;
      }
    }
  };

  export const Tooltips = styled.div`
    ${({ theme }) => theme.flexSet({ justify: 'space-between', align: 'center' })};
    font-weight: 400;
    font-size: 14px;

    & > a:not(:first-of-type) {
      margin-left: 17px;
    }

    ${({ theme }) => theme.media.medium`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 15px 17px;
    background-color: #fff;
    border-top: 1px solid rgb(${theme.palette.white[300]}, 0.5);

    & > a:not(:first-of-type) {
      margin-left: 0;
    }
    `}

    ${({ theme }) => theme.media.small`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 15px 17px;
    border-top: 1px solid rgb(${theme.palette.white[300]}, 0.5);

    & > a:not(:first-of-type) {
      margin-left: 0;
    }
    `}
  `;
  export const Tolltip = styled(Link)<{ to: string }>`
    ${({ theme }) => theme.flexSet({ align: 'center' })};
    cursor: pointer;

    & > div {
      margin-left: 7px;
    }

    & > span {
      font-size: 25px;
    }

    ${({ theme, to }) => theme.media.medium`
    ${order(to)};
    color: rgb(${theme.palette.white[400]}, 0.9);

    & > div {
      display: none;
    }
    & > span {
      font-size: 23px;
    }
    `}

    ${({ theme, to }) => theme.media.small`
    ${order(to)};
    color: rgb(${theme.palette.white[400]}, 0.9);

    & > div {
      display: none;
    }
    & > span {
      font-size: 21px;
    }
    `}
  `;
}
