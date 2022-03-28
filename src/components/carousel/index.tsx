import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { CarouselStyle } from './styles';

interface ICarouselProps {
  items: string[];
}

function Carousel({ items }: ICarouselProps) {
  const [posX, setPosX] = useState(0);
  const { sizes } = useContext(ThemeContext);
  const track = useRef<HTMLDivElement>(null);

  const animate = useCallback((from: number, to: number) => {
    if (track && track.current) {
      track.current.animate(
        { transform: [`translate3d(${from}px, 0, 0)`, `translate3d(${to}px, 0, 0)`] },
        { fill: 'forwards', duration: 250 },
      );
    }
  }, []);

  const onClickPrevButton = useCallback(() => {
    if (window.innerWidth > sizes.small) {
      animate(posX, posX + sizes.large);
      setPosX((prev) => prev + sizes.large);
    } else {
      animate(posX, posX + sizes.small);
      setPosX((prev) => prev + sizes.small);
    }
  }, [animate, posX]);

  const onClickNextvButton = useCallback(() => {
    if (window.innerWidth > sizes.small) {
      animate(posX, posX - sizes.large);
      setPosX((prev) => prev - sizes.large);
    } else {
      animate(posX, posX - sizes.small);
      setPosX((prev) => prev - sizes.small);
    }
  }, [animate, posX, sizes]);

  useEffect(() => {
    console.log();
  }, []);

  return (
    <CarouselStyle.Wrapper>
      <CarouselStyle.PrevButton onClick={onClickPrevButton}>
        <LeftOutlined />
      </CarouselStyle.PrevButton>
      <CarouselStyle.Track
        ref={track}
        device={window.innerWidth > sizes.small ? 'large' : 'small'}
        count={items.length + 1}
      >
        <>
          <CarouselStyle.Image src={items[items.length - 1]} />
          {items.map((item, index) => (
            <CarouselStyle.Image key={index} src={item} />
          ))}
        </>
      </CarouselStyle.Track>
      <CarouselStyle.NextButton onClick={onClickNextvButton}>
        <RightOutlined />
      </CarouselStyle.NextButton>
    </CarouselStyle.Wrapper>
  );
}

export default Carousel;
