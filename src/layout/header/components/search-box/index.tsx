import { DeleteOutlined } from '@ant-design/icons';
import React, { useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RoutesUrl } from 'src/constants/routesUrl';
import { useSearch } from '../../hooks/search.hook';
import { SearchBoxStyles } from './styles';
import qs from 'qs';
import { stringify } from 'src/utils/string/query-string';
import { useClickOutside } from 'src/hooks/useClickOutside';

type SearchBoxProps = ReturnType<typeof useSearch>;

function SearchBox({ state, event }: SearchBoxProps) {
  return (
    <SearchBoxStyles.Wrapper>
      <SearchBoxStyles.Header>
        <SearchBoxStyles.Tab selected={true}>최근검색어</SearchBoxStyles.Tab>
        <SearchBoxStyles.Tab selected={false}>인기검색어</SearchBoxStyles.Tab>
      </SearchBoxStyles.Header>
      <SearchBoxStyles.Contents>
        {state.searchHistory.slice(0, 8).map((searchHistory, index) => (
          <SearchBoxStyles.ContentWrapper key={index}>
            <SearchBoxStyles.Content>
              <SearchBoxStyles.SearchHistory
                to={{ pathname: RoutesUrl.PRODUCTS, search: stringify({ q: searchHistory }) }}
              >
                {searchHistory}
              </SearchBoxStyles.SearchHistory>
              <SearchBoxStyles.DeleteButton onClick={() => event.onDeleteSearchHistory(index)} />
            </SearchBoxStyles.Content>
          </SearchBoxStyles.ContentWrapper>
        ))}
      </SearchBoxStyles.Contents>
      <SearchBoxStyles.Footer>
        <div onClick={event.onDelteAllSearchHistory}>검색어 전체 삭제</div>
        <div onClick={event.onToggleSearchBox}>닫기</div>
      </SearchBoxStyles.Footer>
    </SearchBoxStyles.Wrapper>
  );
}

export default SearchBox;
