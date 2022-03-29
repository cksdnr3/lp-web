import React from 'react';
import { CardStyles } from './styles';

interface ICardProps {
  title?: string;
  image?: string;
  description?: { left?: string; right?: string };
}

function Card({ title, image, description }: ICardProps) {
  return (
    <CardStyles.Wrapper>
      <CardStyles.Image src={image} />
      <CardStyles.Title>{title}</CardStyles.Title>
      <CardStyles.Description>
        <div>{description?.left}</div>
        <div>{description?.right}</div>
      </CardStyles.Description>
    </CardStyles.Wrapper>
  );
}

export default Card;
