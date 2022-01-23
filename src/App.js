import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import AboutUs from './pages/about-us'
import Artists from './pages/artists'
import Index from './pages/index'
import Pictures from './pages/pictures'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Index />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
