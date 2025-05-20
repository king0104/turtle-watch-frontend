import React from 'react';

interface TableOfContentsProps {
  onSectionClick: (sectionId: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ onSectionClick }) => {
  const sections = [
    { id: 'getting-started', title: '시작하기', subsections: [
      { id: 'installation', title: '설치' },
      { id: 'configuration', title: '설정' }
    ]},
    { id: 'features', title: '주요 기능' },
    { id: 'analysis-rules', title: '실행 계획 분석 규칙', subsections: [
      { id: 'full-table-scan', title: '1. Full Table Scan' },
      { id: 'full-index-scan', title: '2. Full Index Scan' },
      { id: 'no-index-used', title: '3. 인덱스 사용 안 함' },
      { id: 'using-filesort', title: '4. Using filesort' },
      { id: 'using-temporary', title: '5. Using temporary' },
      { id: 'many-records-scanned', title: '6. 많은 레코드 스캔' }
    ]}
  ];

  return (
    <nav className="w-64 bg-white shadow-sm rounded-lg p-4 sticky top-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">목차</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => onSectionClick(section.id)}
              className="text-gray-600 hover:text-gray-900 text-left w-full"
            >
              {section.title}
            </button>
            {section.subsections && (
              <ul className="ml-4 mt-2 space-y-1">
                {section.subsections.map((subsection) => (
                  <li key={subsection.id}>
                    <button
                      onClick={() => onSectionClick(subsection.id)}
                      className="text-sm text-gray-500 hover:text-gray-900 text-left w-full"
                    >
                      {subsection.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents; 