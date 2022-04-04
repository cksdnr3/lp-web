import styled from 'styled-components';

export namespace ContentsStyle {
  export const Wrapper = styled.div`
    ${({ theme }) => theme.media.medium`
    padding: 0px 11px;
    `}

    ${({ theme }) => theme.media.small`
    padding: 0px 11px;
    `}
  `;
}
