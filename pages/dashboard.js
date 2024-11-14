// pages/dashboard.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '../components/DashboardLayout';

const Dashboard = () => {
  const router = useRouter();

  // useEffect(() => {
  //   const user = localStorage.getItem('user');  // Check if the user is logged in (this is a static check for demo purposes)
  //   if (!user) {
  //     router.push('/auth/login');  // Redirect to login page if not authenticated
  //   }
  // }, [router]);

  return (
    <DashboardLayout>
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-700">Welcome to the Dashboard!</h2>
        <p className="mt-4 text-gray-600">Here you can manage all your tasks and settings.</p>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
