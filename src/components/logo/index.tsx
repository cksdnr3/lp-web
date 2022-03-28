import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesUrl } from 'src/constants/routesUrl';
import { LogoStyle } from './styles';

interface ILogoProps {
  size?: 'small' | 'medium' | 'large';
}

function Logo({ size = 'medium' }: ILogoProps) {
  return (
    <LogoStyle.Wrapper size={size}>
      <Link to={RoutesUrl.HOME}>LP 장터</Link>
    </LogoStyle.Wrapper>
  );
}

export default Logo;
