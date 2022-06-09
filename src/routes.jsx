import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import WatchPage from './pages/WatchPage';

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/results" exact element={<SearchPage />} />
        <Route path="/watch" exact element={<WatchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
