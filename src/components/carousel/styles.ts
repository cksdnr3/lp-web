import { Device } from 'src/styles/theme/media';
import styled from 'styled-components';

export namespace CarouselStyle {
  export const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
  `;

  export const Track = styled.div<{ count: number; device: Device }>`
    width: ${({ count, device, theme }) => theme.sizes[device] * count}px;
  `;

  export const Button = styled.button`
    font-size: 30px;
    color: #fff;
    position: absolute;
    top: 135px;
    z-index: 11;

    ${({ theme }) => theme.media.medium`
    top: 90px;
    font-size: 20px;
    `}
  `;

  export const PrevButton = styled(Button)`
    left: 5px;
  `;

  export const NextButton = styled(Button)`
    right: 5px;
  `;

  export const Image = styled.img`
    max-width: ${({ theme }) => theme.sizes.large}px;
    height: 300px;
    transform: translate3d(-1024px, 0, 0);
    ${({ theme }) => theme.media.medium`
    // max-width: ${theme.sizes.small}px;
    max-width: 600px;
    height: 200px;
    // transform: scale(0.9);
    `};
  `;

  export const Curtain = styled.svg``;
}
