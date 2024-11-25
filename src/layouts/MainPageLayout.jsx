import React from 'react';
import Navbar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

function MainPageLayout() {
  return (
    <div className="bg-gradient-to-r from-gray-950 to-cyan-900 text-gray-100 min-h-screen max-w-full">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainPageLayout;
