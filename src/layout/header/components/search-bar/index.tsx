import React, { useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { SearchBarStyle } from './styles';
import SearchBox from '../search-box';
import { useSearch } from '../../hooks/search.hook';
import { useClickOutside } from 'src/hooks/useClickOutside';

type SearchBarProps = ReturnType<typeof useSearch>;

function SearchBar(props: SearchBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, props.event.onCloseSearchBox);
  return (
    <SearchBarStyle.Wrapper ref={ref}>
      <SearchBarStyle.Input
        {...props.input.search}
        onKeyPress={(event) =>
          event.key === 'Enter' && props.input.search.isValid && props.event.onSearch(props.input.search.value)
        }
        onFocus={props.event.onOpenSearchBox}
        placeholder="찾고 싶은 상품을 검색해보세요"
      />
      <SearchBarStyle.Icon onClick={() => props.input.search.isValid && props.event.onSearch(props.input.search.value)}>
        <SearchOutlined />
      </SearchBarStyle.Icon>
      {props.state.toggleSearchBox && <SearchBox {...props} />}
    </SearchBarStyle.Wrapper>
  );
}

export default SearchBar;
