import React, { HTMLAttributes, HTMLInputTypeAttribute, ReactElement, useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import { InputStyle } from './styles';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: React.Dispatch<string>;
  type?: HTMLInputTypeAttribute;
  button?: ReactElement<HTMLButtonElement>;
  label?: string;
  disabled?: boolean;
  errorMsg?: string;
  isError?: boolean;
}

function Input(props: IInputProps) {
  const [isFocused, setIsFocuesd] = useState<boolean>();
  const span = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    return () => props.setValue('');
  }, []);

  const onFocus = useCallback(() => {
    setIsFocuesd(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocuesd(false);
  }, []);

  useEffect(() => {
    if (span && span.current && !props.value.length) {
      if (isFocused === true) {
        span.current.animate(
          { fontSize: ['1rem', '0.75rem'], top: ['2.3rem', '0.2rem'] },
          { duration: 250, fill: 'forwards' },
        );
      }
      if (isFocused === false) {
        span.current.animate(
          { fontSize: ['0.75rem', '1rem'], top: ['0.2rem', '2.3rem'] },
          { duration: 250, fill: 'forwards' },
        );
      }
    }
  }, [span, isFocused]);

  return (
    <InputStyle.Label isLabel={!!props.label}>
      <span ref={span}>{props.label}</span>
      <InputStyle.Input {...props} onFocus={onFocus} onBlur={onBlur} disabled={props.disabled} />
      {props.button}
      {props.isError && <InputStyle.ErrorMessage>{props.errorMsg}</InputStyle.ErrorMessage>}
    </InputStyle.Label>
  );
}

export default Input;
