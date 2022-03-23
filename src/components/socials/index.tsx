import React from 'react';
import { Link } from 'react-router-dom';
import { authAPI } from 'src/apis/auth';
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
      ></a>
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
      ></a>
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
      ></a>
    </SocialsStyle.Wrapper>
  );
}

export default Socials;
