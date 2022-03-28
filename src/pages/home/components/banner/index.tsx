import React from 'react';
import Carousel from 'src/components/carousel';
import { BannerStyle } from './styles';

function Banner() {
  return (
    <BannerStyle.Wrapper>
      <Carousel
        items={[
          'https://media.bunjang.co.kr/images/nocrop/795751570.jpg',
          'https://media.bunjang.co.kr/images/nocrop/795196876.jpg',
          'https://media.bunjang.co.kr/images/nocrop/795751223.jpg',
        ]}
      />
    </BannerStyle.Wrapper>
  );
}

export default Banner;
