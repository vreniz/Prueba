import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ArticlesProvider } from './contexts/ArticlesContext';

const root = createRoot(document.getElementById('root')); 
root.render(<React.StrictMode>
  <ArticlesProvider>
    <App />
  </ArticlesProvider>
</React.StrictMode>);

