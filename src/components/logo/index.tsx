import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { RoutesUrl } from 'src/constants/routesUrl';
import { LogoStyle } from './styles';

interface ILogoProps {
  style?: CSSProperties;
  size?: 'small' | 'medium' | 'large';
}

function Logo({ size = 'medium', style }: ILogoProps) {
  return (
    <LogoStyle.Wrapper size={size} style={style}>
      <Link to={RoutesUrl.HOME}>LP 장터</Link>
    </LogoStyle.Wrapper>
  );
}

export default Logo;
