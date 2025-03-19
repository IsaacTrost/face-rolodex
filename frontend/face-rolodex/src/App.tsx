import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import BottomMenu from './components/BottomMenu';
import AddPage from './pages/AddPage';
import SearchPage from './pages/SearchPage';
import FlashcardsPage from './pages/FlashcardsPage';
import PreparePage from './pages/PreparePage';

function App() {
  return (
    <Router>
      <div className="App">
        <main className="App-content">
          <Routes>
            <Route path="/add" element={<AddPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/flashcards" element={<FlashcardsPage />} />
            <Route path="/prepare" element={<PreparePage />} />
            <Route path="*" element={<Navigate to="/add" replace />} />
          </Routes>
        </main>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;
