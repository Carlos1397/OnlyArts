
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Artists from './pages/artists';
import Pictures from './pages/pictures';
import AboutUs from './pages/about-us';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Index />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/pictures' element={<Pictures />} />
        <Route path='/about-us' element={<AboutUs />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
