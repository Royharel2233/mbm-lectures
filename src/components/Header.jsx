import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const links = [
  { to: '/', label: 'דף הבית' },
  { to: '/lectures', label: 'הרצאות, סיורים ומוצגים' },
  { to: '/book', label: 'הספר' },
  { to: '/whoami', label: 'מי אני?' },
  { to: '/contact', label: 'צור קשר' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__social">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M13.5 21v-8.1h2.72l.4-3.15H13.5V7.75c0-.91.25-1.53 1.56-1.53h1.66V3.4A22 22 0 0 0 14.3 3.3c-2.5 0-4.2 1.53-4.2 4.32v2.43H7.36v3.15h2.74V21h3.4Z"/></svg>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer noopener" aria-label="YouTube">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2c.4-1.5.4-4.7.4-4.7ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>
        </a>
      </div>

      <NavLink to="/" className="site-header__brand" aria-label="MBM Lectures – דף הבית">
        <img src={logo} alt="MBM – Mobile Biblical Museum" width={160} height={74} />
      </NavLink>

      <h1 className="site-header__title">המוזיאון המקראי הנייד</h1>
      <p className="site-header__tagline">כל החוויה של מוזיאון, בכל מקום שתבחר.</p>

      <nav className="site-header__nav" aria-label="ניווט ראשי">
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
