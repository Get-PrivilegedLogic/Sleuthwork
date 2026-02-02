import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PuzzlePage from './pages/PuzzlePage';
import PuzzleArchive from './pages/PuzzleArchive';
import DailyPuzzlePage from './pages/DailyPuzzlePage';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/daily" element={<DailyPuzzlePage />} />
          <Route path="/puzzles" element={<PuzzleArchive />} />
          <Route path="/puzzle/:id" element={<PuzzlePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;