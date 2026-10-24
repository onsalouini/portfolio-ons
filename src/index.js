import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/instrument-serif/400.css';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/600.css';
import '@fontsource/source-sans-3/700.css';
import './index.css';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);