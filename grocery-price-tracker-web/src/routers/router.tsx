import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './pages/layouts/MainLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import CategoryPage from './pages/CategoryPage';
import CreateItemPage from './pages/CreateItemPage';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/item',
        element: <ItemPage />,
      },
      {
        path: '/category',
        element: <CategoryPage />,
      },
      {
        path: '/createItem',
        element: <CreateItemPage />,
      },
    ],
  },
]);

export default router;