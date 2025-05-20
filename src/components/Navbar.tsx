import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary-600">Turtle Watch</span>
            </a>
            <div className="hidden md:flex items-center ml-8 space-x-4">
              <a href="/docs" className="text-gray-600 hover:text-primary-600">문서</a>
              <a href="/releases" className="text-gray-600 hover:text-primary-600">릴리즈 노트</a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/your-username/turtle-watch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600"
            >
              GitHub
            </a>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                v1.0.x
              </button>
              <button className="px-3 py-1 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                KOR
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 