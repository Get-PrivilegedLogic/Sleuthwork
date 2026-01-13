import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PuzzlePage from './pages/PuzzlePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;