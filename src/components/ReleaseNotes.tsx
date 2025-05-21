import React from 'react';

const ReleaseNotes: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Release Notes</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">v1.2.0</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>실행 계획 규칙 진단 기능 추가</li>
          <li>설정 옵션 개선</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">v1.1.0</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>슬로우 쿼리 탐지 기능 추가</li>
          <li>로그 포맷 개선</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">v1.0.0</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>초기 릴리즈: 실행 계획 분석, 기본 진단 기능 제공</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ReleaseNotes; 