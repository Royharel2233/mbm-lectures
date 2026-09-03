export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>© כל הזכויות שמורות ל-MBM {year}.</p>
      <a href="mailto:yehuda694@gmail.com">yehuda694@gmail.com</a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.5 21v-8.1h2.72l.4-3.15H13.5V7.75c0-.91.25-1.53 1.56-1.53h1.66V3.4A22 22 0 0 0 14.3 3.3c-2.5 0-4.2 1.53-4.2 4.32v2.43H7.36v3.15h2.74V21h3.4Z"/></svg>
      </a>
    </footer>
  )
}
