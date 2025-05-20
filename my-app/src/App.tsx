import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Blog from './pages/Blog';

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
