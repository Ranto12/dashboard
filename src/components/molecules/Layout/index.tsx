/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Sidebar from './Sidebar';

interface MyObject {
  children : React.ReactNode;
}

const DashboardLayout = ({ children } : MyObject) => (
  <div className="flex h-screen ">
    <div className=" bg-gray-200">
      <Sidebar />
    </div>
    <div className="w-3/4 bg-white">
      <div className="p-4">
        {children}
      </div>
    </div>
  </div>
);

export default DashboardLayout;
