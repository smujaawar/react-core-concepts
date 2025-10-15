import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
// import Products from "../pages/Products";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Company from "../pages/Company";
import Vision from "../pages/Vision";
import ProductDetails from "../pages/ProductDetails";
import React, { Suspense } from "react";

const Lazyproducts = React.lazy(() => import("../pages/Products"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "/about/company",
            element: <Company />,
          },
          {
            path: "/about/vision",
            element: <Vision />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <Lazyproducts />
          </Suspense>
        ),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
