import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface LogEntry {
  timestamp: string;
  level: string;
  message: string;
  executionTime?: number;
  threshold?: number;
  sql?: string;
  executionPlan?: {
    headers: string[];
    rows: string[][];
  };
  analysis?: string[];
  callOrigin?: {
    repository?: string;
    service?: string;
    controller?: string;
  };
}

interface LogViewerProps {
  logs: LogEntry[];
}

const LogViewer: React.FC<LogViewerProps> = ({ logs }) => {
  return (
    <div className="space-y-6">
      {logs.map((log, index) => (
        <div key={index} className="card">
          {/* 로그 헤더 */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">{log.timestamp}</span>
            <span className={`px-2 py-1 rounded text-sm ${
              log.level === 'WARN' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
            }`}>
              {log.level}
            </span>
          </div>

          {/* 메인 메시지 */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{log.message}</h3>
            {log.executionTime && (
              <div className="text-red-600 font-mono">
                Execution time: {log.executionTime}ms (threshold: {log.threshold}ms)
              </div>
            )}
          </div>

          {/* SQL 쿼리 */}
          {log.sql && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">SQL:</h4>
              <div className="code-block">
                <SyntaxHighlighter language="sql" style={tomorrow}>
                  {log.sql}
                </SyntaxHighlighter>
              </div>
            </div>
          )}

          {/* 실행 계획 */}
          {log.executionPlan && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Execution Plan:</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {log.executionPlan.headers.map((header, i) => (
                        <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {log.executionPlan.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 분석 결과 */}
          {log.analysis && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Analysis:</h4>
              <ul className="list-disc list-inside space-y-1">
                {log.analysis.map((item, i) => (
                  <li key={i} className="text-yellow-700">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 호출 스택 */}
          {log.callOrigin && (
            <div>
              <h4 className="text-sm font-semibold mb-2">Call Origin:</h4>
              <div className="bg-gray-50 p-4 rounded-md">
                {log.callOrigin.repository && (
                  <div className="text-sm text-gray-600">
                    Repository: {log.callOrigin.repository}
                  </div>
                )}
                {log.callOrigin.service && (
                  <div className="text-sm text-gray-600">
                    Service: {log.callOrigin.service}
                  </div>
                )}
                {log.callOrigin.controller && (
                  <div className="text-sm text-gray-600">
                    Controller: {log.callOrigin.controller}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LogViewer; 