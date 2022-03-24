import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import store from './store';
import { GlobalStyle } from './styles/global-styles';
import { theme } from './styles/theme';

axios.defaults.baseURL = 'http://localhost:8080';
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
