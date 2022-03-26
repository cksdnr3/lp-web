import React from 'react';
import { LogoStyle } from './styles';

interface ILogoProps {
  size?: 'small' | 'medium' | 'large';
}

function Logo({ size = 'medium' }: ILogoProps) {
  return <LogoStyle.Wrapper size={size}>LP 장터</LogoStyle.Wrapper>;
}

export default Logo;
