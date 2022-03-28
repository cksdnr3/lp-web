import styled, { css } from 'styled-components';

export namespace LogoStyle {
  const small = css`
    font-size: 1rem;
    font-weight: 600;
  `;

  const large = css`
    font-size: 2rem;
    font-weight: 700;
  `;

  const medium = css`
    font-size: 1.4rem;
    font-weight: 700;
  `;

  export const Wrapper = styled.div<{ size: 'small' | 'medium' | 'large' }>`
    a {
      ${({ size }) => {
        if (size === 'small') return small;
        if (size === 'large') return large;
        return medium;
      }}
      font-style: italic;
      color: ${({ theme }) => theme.main.color()};
    }
  `;
}
