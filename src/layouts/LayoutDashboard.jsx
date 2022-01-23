import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

function LayoutDashboard() {
  return (
    <section className="dashboard-layout">
      <NavBar />
      <main className="flex flex-col z-10 w-full">
        <Outlet />
      </main>
    </section>
  )
}

export default LayoutDashboard
