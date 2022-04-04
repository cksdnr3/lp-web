import axios from 'axios';
import React, { useMemo } from 'react';
import { KakaoEnvironments } from 'src/env/kakao/kakao.env';
import { SocialsStyle } from './styles';

type Social = 'kakao' | 'naver' | 'google';
interface ISocialsProps {
  types: (Social | undefined)[];
}

function Socials({ types }: ISocialsProps) {
  const socials = useMemo<({ style: any; href: string } | undefined)[]>(() => {
    return types.map((type) => {
      const defaultStyle = {
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      };

      switch (type) {
        case 'kakao': {
          return {
            style: {
              ...defaultStyle,
              backgroundColor: '#ffcd00',
              backgroundImage: "url('https://statics.goorm.io/images/social/logo/kakaoLogo.svg')",
            },
            href: `https://${KakaoEnvironments.HOST}/oauth/authorize?client_id=${KakaoEnvironments.REST_API_KEY}&redirect_uri=${KakaoEnvironments.REDIRECT_URI}&response_type=code`,
          };
        }
        case 'naver': {
          return {
            style: {
              ...defaultStyle,
              backgroundColor: '#1dc800',
              backgroundImage: "url('https://statics.goorm.io/images/social/logo/naverLogo.svg')",
            },
            href: ``,
          };
        }
        case 'google': {
          return {
            style: {
              ...defaultStyle,
              backgroundColor: '#fafafa',
              backgroundImage: "url('https://statics.goorm.io/images/social/logo/googleLogo.svg')",
            },
            href: ``,
          };
        }
        default: {
          return;
        }
      }
    });
  }, [types]);
  return (
    <SocialsStyle.Wrapper>
      {socials.map(
        (social, index) =>
          social && (
            <a key={index} style={social.style} href="#" onClick={() => window.location.replace(social.href)} />
          ),
      )}
    </SocialsStyle.Wrapper>
  );
}

export default Socials;
