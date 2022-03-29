import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDevice } from 'src/features/device/device.slice';
import { ThemeContext } from 'styled-components';
import { CarouselStyle } from './styles';

interface ICarouselProps {
  items: string[];
}

function Carousel({ items }: ICarouselProps) {
  const track = useRef<HTMLDivElement>(null);
  const lastClone = useRef<HTMLImageElement>(null);
  const firstClone = useRef<HTMLImageElement>(null);

  const { device } = useSelector(selectDevice);
  const { sizes } = useContext(ThemeContext);
  const [counter, setCounter] = useState(1);

  const translate = useCallback(
    (posX: number, animate: boolean) => {
      if (track && track.current) {
        track.current.style.transition = animate ? 'transform 0.4s ease-in-out' : 'none';
        track.current.style.transform = `translateX(${-sizes[device] * posX}px)`;
      }
      return posX;
    },
    [track, device, sizes],
  );

  const onClickPrevButton = useCallback(() => {
    if (counter <= 0) return;
    setCounter((prev) => translate(prev - 1, true));
  }, [translate, counter]);

  const onClickNextButton = useCallback(() => {
    if (counter >= items.length + 1) return;
    setCounter((prev) => translate(prev + 1, true));
  }, [counter, translate]);

  useEffect(() => {
    if (track && track.current) {
      const handler = () => {
        if (track.current?.children[counter] === lastClone.current) {
          setCounter(() => translate(items.length, false));
        }

        if (track.current?.children[counter] === firstClone.current) {
          setCounter(() => translate(1, false));
        }
      };

      track.current.addEventListener('transitionend', handler);
      return () => track.current?.removeEventListener('transitionend', handler);
    }
  }, [track, counter, translate]);

  useEffect(() => {
    if (track && track.current) {
      const handler = () => {
        setCounter((prev) => translate(prev + 1, true));
      };

      const tid = setTimeout(handler, 5000);

      return () => clearTimeout(tid);
    }
  }, [track, counter, translate]);

  return (
    <CarouselStyle.Wrapper>
      <CarouselStyle.PrevButton onClick={onClickPrevButton}>
        <LeftOutlined />
      </CarouselStyle.PrevButton>
      <CarouselStyle.Track ref={track} device={device} count={items.length + 2}>
        <CarouselStyle.Image id={`${0}`} ref={lastClone} src={items[items.length - 1]} />
        {items.map((item, index) => (
          <CarouselStyle.Image id={`${index + 1}`} key={index} src={item} />
        ))}
        <CarouselStyle.Image id={`${items.length + 1}`} ref={firstClone} src={items[0]} />
      </CarouselStyle.Track>
      <CarouselStyle.NextButton onClick={onClickNextButton}>
        <RightOutlined />
      </CarouselStyle.NextButton>
    </CarouselStyle.Wrapper>
  );
}

export default Carousel;
