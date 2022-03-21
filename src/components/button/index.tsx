import React, { HTMLAttributes } from 'react';
import { ButtonStyle } from './styles';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
}

function Button(props: IButtonProps) {
  return (
    <ButtonStyle.Button {...props} disabled={props.disabled}>
      {props.text}
    </ButtonStyle.Button>
  );
}

export default Button;
