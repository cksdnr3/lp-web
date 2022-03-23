import React from 'react';
import { ReactElement } from 'react';
import { HTMLAttributes } from 'react';
import { FormStyle } from './styles';

interface IFormProps extends HTMLAttributes<HTMLFormElement> {
  header?: ReactElement;
  content: (ReactElement | undefined)[];
  footer?: ReactElement;
}

function Form(props: IFormProps) {
  return (
    <FormStyle.Form {...props} onSubmit={props.onSubmit}>
      <FormStyle.Header>{props.header}</FormStyle.Header>
      <FormStyle.Content>
        {props.content.map((input, i) => (
          <div key={i}>{input}</div>
        ))}
      </FormStyle.Content>
      <FormStyle.Footer>{props.footer}</FormStyle.Footer>
    </FormStyle.Form>
  );
}

export default Form;
