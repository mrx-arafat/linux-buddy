import { Outlet } from 'react-router-dom'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
