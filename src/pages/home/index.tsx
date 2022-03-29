import React from 'react';
import Banner from './components/banner';
import Contents from './components/contents';
import { useProducts } from './components/hook';
import { HomeStyle } from './styles';

function Home() {
  return (
    <HomeStyle.Wrapper>
      <HomeStyle.Section>
        <Banner />
      </HomeStyle.Section>
      <HomeStyle.Section>
        <Contents />
      </HomeStyle.Section>
    </HomeStyle.Wrapper>
  );
}

export default Home;
