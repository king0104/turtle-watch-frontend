import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TableOfContents from './components/TableOfContents';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Docs from './components/Docs';
import ReleaseNotes from './components/ReleaseNotes';

const App: React.FC = () => {
  const gradleCode = `dependencies {
    implementation 'io.github.turtle-watch:turtle-watch:1.0.0'
}`;

  const ymlCode = `turtle-watch:
  enabled: true
  threshold-ms: 500  # 500ms 이상 걸리는 쿼리를 슬로우 쿼리로 감지
  log-level: WARN
  show-stack-trace: true
  analyze-execution-plan: true`;

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/docs" element={<Docs />} />
        <Route path="/release-notes" element={<ReleaseNotes />} />
        <Route path="*" element={<Navigate to="/docs" replace />} />
      </Routes>
    </Router>
  );
};

export default App; 