import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PuzzlePage from './pages/PuzzlePage';
import PuzzleArchive from './pages/PuzzleArchive';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/puzzles" element={<PuzzleArchive />} />
        <Route path="/puzzle/:puzzleId" element={<PuzzlePage />} />
      </Routes>
    </Router>
  );
}

export default App;