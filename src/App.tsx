import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { InvalidatedProjectKind } from 'typescript';
import { InvoiceForm } from './invoice/InvoiceForm';
import Language from './components/language/Language';
import { Flex } from '@chakra-ui/react';
import { Menu } from './Menu';
import { InvoiceMain } from './invoice/InvoiceMain';

import ShoppinDashboard from './dashboard/ShoppingDashboard';
import StatisticsDashboard from './dashboard/StatisticsDashboard';
import { DEFAULT_STORENAME } from './Constants';
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
       <Language />
      <Menu/>
      <Routes>
    <Route path="/" >
      <Route index element={<InvoiceMain />} />
      <Route path="dashboard/statistics" element={<StatisticsDashboard storeName={DEFAULT_STORENAME}/>} />
      <Route path="dashboard/shopping" element={<ShoppinDashboard />} />
      <Route path="invoice" element={<InvoiceMain />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>

    </div>
  );
}

export default App;
