import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './pages/layouts/MainLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import CategoryPage from './pages/CategoryPage';
import CreateNewRecordPage from './pages/CreateNewRecordPage';
import ItemDetailPage from './pages/ItemDetailPage';
import SearchPage from './pages/SearchPage';

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
        path: '/itemDetail',
        element: <ItemDetailPage />,
      },
      {
        path: '/category',
        element: <CategoryPage />,
      },
      {
        path: '/createNewRecord',
        element: <CreateNewRecordPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
    ],
  }
]);

export default router;