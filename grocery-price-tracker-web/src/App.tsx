import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
import { Provider } from 'react-redux';
import { store } from './stores/store';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './styles/theme';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  )
};

export default App
