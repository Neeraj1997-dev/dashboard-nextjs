// components/DashboardLayout.js
import React from 'react';
import Link from 'next/link';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/dashboard" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/auth/login" className="hover:underline">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <main className="p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
