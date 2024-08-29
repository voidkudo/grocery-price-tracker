import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
import { Provider } from 'react-redux';
import { store } from './stores/store';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
};

export default App
