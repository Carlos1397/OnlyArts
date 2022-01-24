import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutDashboard from './layouts/LayoutDashboard'
import Page404 from './pages/404'
import RecoveryPass from './pages/auth/recoveryPassword'
import AboutUs from './pages/dashboard/About-us'
import Artists from './pages/dashboard/Artists'
import Home from './pages/dashboard/Home'
import Pictures from './pages/dashboard/Pictures'
import HomeProfile from './pages/dashboard/profile/HomeProfile'
import Index from './pages/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="auth/recovery-pass" element={<RecoveryPass />} />
        <Route path="dashboard" element={<LayoutDashboard />}>
          <Route index element={<Home />} />
          <Route path="artists" element={<Artists />} />
          <Route path="pictures" element={<Pictures />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="profile" element={<HomeProfile />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
