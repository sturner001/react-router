import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ProductPage from './pages/Products';
import AboutPage from './pages/About';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'prod', element: <ProductPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'prod/:prodId', element: <ProductDetailPage /> }
    ],

  },


]);

function App() {
  return <RouterProvider router={router} />

}

export default App;
