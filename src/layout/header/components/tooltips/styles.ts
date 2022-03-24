import styled from 'styled-components';

export namespace GnbTooltipsStyle {
  export const Tooltips = styled.div`
    display: flex;
    font-weight: 400;
    ${({ theme }) => theme.media.medium`
    display: none;
    `}
  `;
  export const Tolltip = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center' })};
    font-size: 14px;
    cursor: pointer;

    & > span {
      margin-left: 10px;
    }
  `;
}
