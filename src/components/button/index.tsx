import { LoadingOutlined } from '@ant-design/icons';
import React, { HTMLAttributes } from 'react';
import { ButtonStyle } from './styles';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: any;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
}

function Button(props: IButtonProps) {
  return (
    <ButtonStyle.Button {...props} type={props.type} disabled={props.disabled}>
      {props.isLoading ? <LoadingOutlined /> : props.text}
    </ButtonStyle.Button>
  );
}

export default Button;
