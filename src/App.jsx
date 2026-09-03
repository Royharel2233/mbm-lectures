import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import WhoAmI from './pages/WhoAmI.jsx'
import Lectures from './pages/Lectures.jsx'
import Contact from './pages/Contact.jsx'
import Book from './pages/Book.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/whoami" element={<WhoAmI />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
