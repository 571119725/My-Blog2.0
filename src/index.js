import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopNavigation from '@/layout/js/TopNavigation'
import LeftPart from '@/layout/js/LeftPart'
import RightPart from '@/layout/js/RightPart'
import MainContent from '@/layout/js/MainContent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <TopNavigation />
    <div>
      <LeftPart />
      <MainContent />
      <RightPart />
    </div>
  </div>
);
