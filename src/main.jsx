import { createRoot } from 'react-dom/client'
import './main.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error.jsx";
import HomePage from './pages/home.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      // {
      //   path: "/user",
      //   element: <User_page />,
      // },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
