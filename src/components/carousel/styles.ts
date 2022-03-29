import { Device } from 'src/styles/theme/media';
import styled from 'styled-components';

export namespace CarouselStyle {
  export const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
  `;

  export const Track = styled.div<{ count: number; device: Device }>`
    width: ${({ theme, count }) => theme.sizes.large * count}px;
    transform: translate3d(-1024px, 0, 0);

    ${({ theme, count }) => theme.media.medium`
    transform: translate3d(-${theme.sizes.medium}px, 0, 0);
    width: ${theme.sizes.medium * count}px;

    `};

    ${({ theme, count }) => theme.media.small`
    transform: translate3d(-${theme.sizes.small}px, 0, 0);
    width: ${theme.sizes.small * count}px;

    `};
  `;

  export const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(${({ theme }) => theme.palette.white[100]}, 0.6);
    font-size: 26px;
    z-index: 11;
    transition: color 0.2s;
    &:hover {
      color: rgb(${({ theme }) => theme.palette.white[100]});
    }

    ${({ theme }) => theme.media.medium`
    font-size: 23px;
    `}

    ${({ theme }) => theme.media.small`
    font-size: 20px;
    `}
  `;

  export const PrevButton = styled(Button)`
    left: 8px;
  `;

  export const NextButton = styled(Button)`
    right: 8px;
  `;

  export const Image = styled.img`
    max-width: ${({ theme }) => theme.sizes.large}px;
    height: ${({ theme }) => theme.sizes.large / 3.3}px;

    ${({ theme }) => theme.media.medium`
    max-width: ${theme.sizes.medium}px;
    height: ${theme.sizes.medium / 3.4}px;
    `};

    ${({ theme }) => theme.media.small`
    max-width: ${theme.sizes.small}px;
    height: ${theme.sizes.small / 3.2}px;
    `};
  `;

  export const Curtain = styled.svg``;
}
