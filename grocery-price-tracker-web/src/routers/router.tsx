import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './pages/layouts/MainLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import CategoryPage from './pages/CategoryPage';
import CreateNewRecordPage from './pages/CreateNewRecordPage';
import SeedingPage from './pages/SeedingPage';

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
        path: '/createNewRecord',
        element: <CreateNewRecordPage />,
      },
    ],
  },
  {
    path: '/seeding',
    element: <SeedingPage />,
    errorElement: <ErrorPage />,
  }
]);

export default router;