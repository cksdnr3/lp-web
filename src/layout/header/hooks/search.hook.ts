import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ProductsApi } from 'src/apis/products';
import { RoutesUrl } from 'src/constants/routesUrl';
import useInput from 'src/hooks/useInput';
import { useToggle } from 'src/hooks/useToggle';
import { stringify } from 'src/utils/string/query-string';
import { Validate } from 'src/utils/validate';

const SEARCH_HISTORY = 'search-history';

export const useSearch = () => {
  const navigate = useNavigate();

  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const searchInput = useInput('', Validate.nill);
  const {
    toggle: toggleSearchBox,
    onToggle: onToggleSearchBox,
    onOpenToggle: onOpenSearchBox,
    onCloseToggle: onCloseSearchBox,
  } = useToggle();

  const searchQuery = useQuery('/products', () => ProductsApi.get.products(), {});

  const onSearch = useCallback((q: string) => {
    setSearchHistory((prev) => [q, ...prev]);
    navigate({ pathname: RoutesUrl.PRODUCTS, search: stringify({ q }) });
  }, []);

  const onDeleteSearchHistory = useCallback((index: number) => {
    setSearchHistory((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const onDelteAllSearchHistory = useCallback(() => {
    setSearchHistory([]);
  }, []);

  useEffect(() => {
    const searchHistory = localStorage.getItem(SEARCH_HISTORY);
    if (searchHistory) {
      setSearchHistory(JSON.parse(searchHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SEARCH_HISTORY, JSON.stringify([...searchHistory]));
  }, [searchHistory]);

  return {
    state: { searchHistory, toggleSearchBox },
    input: { search: searchInput },
    query: { search: searchQuery },
    event: {
      onSearch,
      onDeleteSearchHistory,
      onDelteAllSearchHistory,
      onToggleSearchBox,
      onOpenSearchBox,
      onCloseSearchBox,
    },
  };
};
