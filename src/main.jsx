import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error.jsx";
import HomePage from './pages/home.jsx';
import MainBody from './main-body.jsx';
import Products from './components/products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "/Test",
        element: <Products />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
