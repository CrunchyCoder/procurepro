import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { HomePage } from './components/pages/HomePage';
import { ProcessDetail } from './components/pages/ProcessDetail';
import { isValidPage } from './data/navigation';
import { getProcess } from './data/processes';
import './App.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (pageId: string) => {
    if (isValidPage(pageId)) {
      setCurrentPage(pageId);
    }
  };

  const renderCurrentPage = () => {
    if (currentPage === 'home') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    const process = getProcess(currentPage);
    if (process) {
      return <ProcessDetail processKey={currentPage} onNavigate={handleNavigate} />;
    }

    // Fallback to home if invalid page
    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9fafb' }}>
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />
      <main style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          {renderCurrentPage()}
        </div>
      </main>
    </div>
  );
};

export default App;