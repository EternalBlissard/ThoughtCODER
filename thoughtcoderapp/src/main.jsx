import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Loading from './Loading.jsx';
import MainApp from './mainapp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<App />} />
        
        {/* Loading Page */}
        <Route path="/loading" element={<Loading />} />
        
        {/* Main Application */}
        <Route path="/mainapp" element={<MainApp />} />
      </Routes>
    </Router>
  </StrictMode>,
);
