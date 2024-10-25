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
        element: <Products data="../../data/home.txt" />,
      },
      {
        path: "/Laptop",
        element: <Products data="../../data/laptop.txt" productType="Laptop" />,
      },
      {
        path: "/Screen",
        element: <Products data="../../data/screen.txt" productType="Màn hình máy tính" />,
      },
      {
        path: "/CPU",
        element: <Products data="../../data/comming-soon.txt" productType="CPU" />,
      },
      {
        path: "/Mainboard",
        element: <Products data="../../data/comming-soon.txt" productType="Mainboard" />,
      },
      {
        path: "/VGA",
        element: <Products data="../../data/comming-soon.txt" productType="VGA" />,
      },
      {
        path: "/RAM",
        element: <Products data="../../data/comming-soon.txt" productType="RAM" />,
      },
      {
        path: "/Power",
        element: <Products data="../../data/comming-soon.txt" productType="Nguồn" />,
      },
      {
        path: "/SSD",
        element: <Products data="../../data/comming-soon.txt" productType="SSD" />,
      },
      {
        path: "/HDD",
        element: <Products data="../../data/comming-soon.txt" productType="HDD" />,
      },
      {
        path: "/USB",
        element: <Products data="../../data/comming-soon.txt" productType="USB" />,
      },
      {
        path: "/MemoryCard",
        element: <Products data="../../data/comming-soon.txt" productType="Thẻ nhớ" />,
      },
      {
        path: "/Keyboard",
        element: <Products data="../../data/comming-soon.txt" productType="Bàn phím" />,
      },
      {
        path: "/Mouse",
        element: <Products data="../../data/comming-soon.txt" productType="Chuột" />,
      },
      {
        path: "/Headphone",
        element: <Products data="../../data/comming-soon.txt" productType="Tai nghe" />,
      },
      {
        path: "/Webcam",
        element: <Products data="../../data/comming-soon.txt" productType="Webcam" />,
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
