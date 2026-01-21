import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import AnimatedOutlet from './AnimatedOutlet';

const MainLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <AnimatedOutlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
