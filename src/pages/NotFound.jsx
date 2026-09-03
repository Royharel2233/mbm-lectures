import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="הדף לא נמצא | MBM LECTURES" description="הדף המבוקש לא נמצא." path="/404" />
      <h2 className="page-title">הדף לא נמצא</h2>
      <p>
        <Link to="/">חזרה לדף הבית</Link>
      </p>
    </>
  )
}
