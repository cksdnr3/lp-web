import styled from 'styled-components';

export namespace LoginTooltipStyle {
  export const Wrapper = styled.div`
    ${({ theme }) => theme.flexSet({ justify: 'space-between' })};
    font-size: 0.8rem;

    & a:hover {
      text-decoration: underline;
    }
  `;
}
