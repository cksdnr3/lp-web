import { css, CSSObject, SimpleInterpolation } from 'styled-components';

export type Device = 'small' | 'medium' | 'large';

export const sizes: Record<Device, number> = {
  large: 1024,
  medium: 768,
  small: 600,
};

export const media = Object.entries(sizes).reduce((acc, [device, size]) => {
  return {
    ...acc,
    [device]: (first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
      @media only screen and (max-width: ${size}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<Device, string>;
