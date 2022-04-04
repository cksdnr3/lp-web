import React from 'react';
import { DropdownStyle } from './styles';

interface IDropdownProps {
  items: any[];
  drop?: boolean;
}

function Dropdown({ items, drop }: IDropdownProps) {
  return (
    <DropdownStyle.Wrapper drop={drop}>
      {items.map((item, index) => (
        <DropdownStyle.Menu key={index}>{item}</DropdownStyle.Menu>
      ))}
    </DropdownStyle.Wrapper>
  );
}

export default Dropdown;
