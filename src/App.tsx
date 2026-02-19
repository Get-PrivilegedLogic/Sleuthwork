import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PuzzlePage from './pages/PuzzlePage';
import PuzzleArchive from './pages/PuzzleArchive';
import DailyPuzzlePage from './pages/DailyPuzzlePage';
import StoryModePage from './pages/StoryModePage';
import ChapterPage from './pages/ChapterPage';
import ChapterPuzzlePage from './pages/ChapterPuzzlePage';
import NotFoundPage from './pages/NotFoundPage';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/daily" element={<DailyPuzzlePage />} />
          <Route path="/daily/:date" element={<DailyPuzzlePage />} />
          <Route path="/puzzles" element={<PuzzleArchive />} />
          <Route path="/puzzle/:id" element={<PuzzlePage />} />
          <Route path="/story" element={<StoryModePage />} />
          <Route path="/story/:chapterId" element={<ChapterPage />} />
          <Route path="/story/:chapterId/:puzzleIndex" element={<ChapterPuzzlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;