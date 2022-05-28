import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { WatchPage } from './pages/WatchPage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchPage />} />
        <Route path="/watch" element={<WatchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
