import { Box } from '@mui/material'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from 'react'
import Home from './pages/home/Home'
import Contributions from './pages/contributions/Contributions';
import Return from './components/payment/Return';
import Cancel from './components/payment/Cancel';
import Notify2 from './components/payment/Notify2';

const Layout = () => {
  return (
    <Box sx={{ height:'100vh', width:'100vw', overflow:'hidden', overflowY:'visible' }} className="app">
      {/* <Navbar /> */}
      <Outlet />
    </Box>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", // This is the Home page path
        element: <Home />,
      },
      {
        path: "/contributions", // Add the route for products with subcategory
        element: <Contributions />,
      },
      {
        path: "/return", // Add the route for products with subcategory
        element: <Return />,
      },
      {
        path: "/cancel", // Add the route for products with subcategory
        element: <Cancel />,
      },
      {
        path: "/notify", // Add the route for products with subcategory
        element: <Notify2 />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App