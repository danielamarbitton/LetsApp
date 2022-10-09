import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';



const Layout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);



export default Layout;