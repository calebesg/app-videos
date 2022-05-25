import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
