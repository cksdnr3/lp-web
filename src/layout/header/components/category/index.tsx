import React, { useState } from 'react';
import Dropdown from 'src/components/dropdown';
import { CategoryStyle } from './styles';

interface ICategoryProps {
  drop: boolean;
  toggleMenu: () => void;
}

function Category({ drop, toggleMenu }: ICategoryProps) {
  return (
    <CategoryStyle.Wrapper onMouseLeave={toggleMenu}>
      <Dropdown drop={drop} items={['락', '발라드', '힙합']} />
    </CategoryStyle.Wrapper>
  );
}

export default Category;
