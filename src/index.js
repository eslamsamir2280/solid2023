import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import En from './pages/en';
import Ar from './pages/ar';
import AOS from "aos";
import {HelmetProvider } from "react-helmet-async";
import "aos/dist/aos.css";
import './index.css';
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <En />,
  },
  {
    path: "Ar",
    element: <Ar />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

