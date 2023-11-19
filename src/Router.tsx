import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { InvoiceForm } from "./invoice/InvoiceForm";
import { InvoiceMain } from "./invoice/InvoiceMain";
import { Dashboard } from "./dashboard/Dashboard";

let router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return <InvoiceMain/>
    },
  },
  {
    path: "/invoice",
    Component() {
      return <InvoiceForm/>
    }
  }, 
  {
    path: "/dashboard",
    Component() {
      return <Dashboard/>
    }
  },
]);

export  const InvoiceRouter=()=> {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

