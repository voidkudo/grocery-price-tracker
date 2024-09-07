import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/layouts/MainLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';

const router = createBrowserRouter([
  {
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/item',
        element: <ItemPage />,
      }
    ],
  },
]);

export default router;