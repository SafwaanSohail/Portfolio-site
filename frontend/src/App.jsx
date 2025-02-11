import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navigation />
        <div className="layout">
          <Sidebar />
          <Home />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App; 