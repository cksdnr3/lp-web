import GlobalNavBar from './components/global-nav-bar';
import StatusBar from './components/status-bar';
import { useHeader } from './hooks/header.hook';
import { useSearch } from './hooks/search.hook';
import { HeaderStyle } from './styles';

function Header() {
  return (
    <>
      <StatusBar {...useHeader()} />
      <GlobalNavBar {...useSearch()} />
    </>
  );
}

export default Header;
