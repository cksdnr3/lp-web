import React from 'react';
import { KakaoEnvironments } from 'src/env/kakao/kakao.env';
import { SocialsStyle } from './styles';

function Socials() {
  return (
    <SocialsStyle.Wrapper>
      <a
        style={{
          width: 40,
          height: 40,
          borderRadius: 5,
          backgroundColor: '#ffcd00',
          backgroundImage: "url('https://statics.goorm.io/images/social/logo/kakaoLogo.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        href={`https://${KakaoEnvironments.HOST}/oauth/authorize?client_id=${KakaoEnvironments.REST_API_KEY}&redirect_uri=${KakaoEnvironments.REDIRECT_URI}&response_type=code`}
      />
      <a
        style={{
          width: 40,
          height: 40,
          borderRadius: 5,
          backgroundColor: '#1dc800',
          backgroundImage: "url('https://statics.goorm.io/images/social/logo/naverLogo.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <a
        style={{
          width: 40,
          height: 40,
          borderRadius: 5,
          backgroundColor: '#fafafa',
          backgroundImage: "url('https://statics.goorm.io/images/social/logo/googleLogo.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
    </SocialsStyle.Wrapper>
  );
}

export default Socials;
