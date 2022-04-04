import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import HelmetFont from 'src/components/helmet-font';
import { GlobalStyle } from 'src/styles/global-styles';
import { theme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import userSlice from 'src/features/user/user.slice';
import deviceSlice from 'src/features/device/device.slice';

const queryClient = new QueryClient();

function render(
  component: any,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        user: userSlice,
        device: deviceSlice,
      },
      preloadedState,
    }),
    ...renderOptions
  }: {
    preloadedState?: any;
    store?: EnhancedStore;
  } = {},
) {
  const Wrapper = ({ children }: { children: any }) => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <HelmetProvider>
                <HelmetFont />
                {children}
              </HelmetProvider>
            </Provider>
          </QueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
  };
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
