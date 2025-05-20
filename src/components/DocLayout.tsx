import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface DocLayoutProps {
  children: React.ReactNode;
}

const DocLayout: React.FC<DocLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      <main className="pl-64 pt-16">
        <div className="container mx-auto px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocLayout; 