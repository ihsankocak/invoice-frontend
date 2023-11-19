import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { InvoiceForm } from "./invoice/InvoiceForm";
import { InvoiceMain } from "./invoice/InvoiceMain";

import ShoppinDashboard from "./dashboard/ShoppingDashboard";
import StatisticsDashboard from "./dashboard/StatisticsDashboard";

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
    path: "/dashboard/statistics",
    Component() {
      return <StatisticsDashboard/>
    }
  },
  {
    path: "/dashboard/shopping",
    Component() {
      return <ShoppinDashboard/>
    }
  },
]);

export  const InvoiceRouter=()=> {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

