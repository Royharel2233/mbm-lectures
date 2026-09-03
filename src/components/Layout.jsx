import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="page">
      <Header />
      <main className="page__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
