import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { InvoiceForm } from "./invoice/InvoiceForm";
import { InvoiceMain } from "./invoice/InvoiceMain";

import ShoppingDashboard from "./dashboard/ShoppingDashboard";
import StatisticsDashboard from "./dashboard/StatisticsDashboard";
import { DEFAULT_STORENAME } from "./Constants";

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
      return <InvoiceMain/>
    }
  }, 
  {
    path: "/dashboard/statistics",
    Component() {
      return <StatisticsDashboard storeName={DEFAULT_STORENAME} />
    }
  },
  {
    path: "/dashboard/shopping",
    Component() {
      return <ShoppingDashboard/>
    }
  },
]);

export  const InvoiceRouter=()=> {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

