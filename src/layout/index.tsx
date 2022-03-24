import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import { LayoutStyle } from './styles';

function Layout() {
  return (
    <>
      <Header />
      <LayoutStyle.Wrapper>
        <Outlet />
        <Footer />
      </LayoutStyle.Wrapper>
    </>
  );
}

export default Layout;
