import React from 'react';
import { DropdownStyle } from './styles';

interface IDropdownProps {
  items: any[];
}

function Dropdown({ items }: IDropdownProps) {
  return <DropdownStyle.Wrapper>{items.map((item) => {})}</DropdownStyle.Wrapper>;
}

export default Dropdown;
