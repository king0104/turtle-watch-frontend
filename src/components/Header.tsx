import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const navMenus = [
  { name: "Docs", href: "/docs" },
  { name: "Release Notes", href: "/release-notes" },
];

export default function Header() {
  const [dark, setDark] = React.useState(false);
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <a href="#hero" className="font-extrabold text-2xl text-gray-900 dark:text-white tracking-tight select-none">
          Turtle Watch
        </a>
        {/* Main Nav */}
        <nav className="flex gap-8 ml-8">
          {navMenus.map((menu) => (
            <Link
              key={menu.name}
              to={menu.href}
              className={`text-lg font-medium transition-colors ${location.pathname === menu.href ? 'text-purple-700' : 'text-gray-700 dark:text-gray-200 hover:text-purple-700'}`}
            >
              {menu.name}
            </Link>
          ))}
        </nav>
        {/* Right icons */}
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/your-org/turtle-watch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
            aria-label="GitHub"
          >
            {FaGithub({})}
          </a>
          {/* Dark mode toggle */}
          <button
            onClick={() => {
              setDark((d) => !d);
              if (typeof window !== "undefined") {
                document.documentElement.classList.toggle("dark");
              }
            }}
            className="ml-2 text-lg text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="다크모드 토글"
          >
            {dark ? (
              <span role="img" aria-label="라이트 모드">🌞</span>
            ) : (
              <span role="img" aria-label="다크 모드">🌙</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
} 