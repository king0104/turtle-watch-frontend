import React from 'react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const menuItems = [
    {
      title: '시작하기',
      items: [
        { label: '소개', href: '/docs/introduction' },
        { label: '설치', href: '/docs/installation' },
        { label: '빠른 시작', href: '/docs/quickstart' },
      ],
    },
    {
      title: '기본 사용법',
      items: [
        { label: '실행 계획 분석', href: '/docs/execution-plan' },
        { label: '성능 문제 진단', href: '/docs/performance-diagnostics' },
        { label: '로그 설정', href: '/docs/logging' },
      ],
    },
    {
      title: '고급 기능',
      items: [
        { label: '커스텀 분석 규칙', href: '/docs/custom-rules' },
        { label: '다양한 DB 지원', href: '/docs/database-support' },
        { label: 'API 레퍼런스', href: '/docs/api-reference' },
      ],
    },
  ];

  return (
    <nav className={`w-64 bg-white border-r border-gray-200 fixed h-full pt-16 ${className}`}>
      <div className="p-4">
        {menuItems.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    href={item.href}
                    className="block px-2 py-1 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar; 