import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ProductPage from './pages/Products';
import AboutPage from './pages/About';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/prod', element: <ProductPage /> },
      { path: '/about', element: <AboutPage /> },
    ],

  },


]);

function App() {
  return <RouterProvider router={router} />

}

export default App;
