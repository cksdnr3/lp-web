import GlobalNavBar from './components/global-nav-bar';
import StatusBar from './components/status-bar';
import { HeaderStyle } from './styles';

function Header() {
  return (
    <>
      <StatusBar />
      <GlobalNavBar />
    </>
  );
}

export default Header;
