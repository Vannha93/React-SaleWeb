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
        path: "/Laptop",
        element: <Products />,
      },
      {
        path: "/Screen",
        element: <Products />,
      },
      {
        path: "/CPU",
        element: <Products />,
      },
      {
        path: "/Mainboard",
        element: <Products />,
      },
      {
        path: "/VGA",
        element: <Products />,
      },
      {
        path: "/RAM",
        element: <Products />,
      },
      {
        path: "/Power",
        element: <Products />,
      },
      {
        path: "/SSD",
        element: <Products />,
      },
      {
        path: "/HDD",
        element: <Products />,
      },
      {
        path: "/USB",
        element: <Products />,
      },
      {
        path: "/MemoryCard",
        element: <Products />,
      },
      {
        path: "/Keyboard",
        element: <Products />,
      },
      {
        path: "/Mouse",
        element: <Products />,
      },
      {
        path: "/Headphone",
        element: <Products />,
      },
      {
        path: "/Webcam",
        element: <Products />,
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
