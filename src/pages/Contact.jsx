import { useState } from 'react'
import Seo from '../components/Seo.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // No backend wired up yet — falls back to a prefilled mailto.
    // Swap this for a real endpoint (Formspree, a serverless function, etc.) when you deploy.
    const subject = encodeURIComponent(`פנייה מהאתר – ${form.name}`)
    const body = encodeURIComponent(
      `שם: ${form.name}\nאימייל: ${form.email}\nטלפון: ${form.phone}\n\n${form.message}`
    )
    window.location.href = `mailto:yehuda694@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <Seo
        title="צור קשר | mbm lectures | הרצאות והדרכות בארכיאולגיה מקראית"
        description="צרו קשר בכדי לשמוע על יותר מ-30 הרצאות והדרכות מרתקות."
        path="/contact"
      />

      <h2 className="page-title">צור קשר</h2>
      <p className="contact-lead">צור איתי קשר</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span className="sr-only">שם מלא</span>
          <input
            type="text"
            name="name"
            placeholder="שם מלא *"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <span className="sr-only">אימייל</span>
          <input
            type="email"
            name="email"
            placeholder="אימייל *"
            required
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span className="sr-only">טלפון</span>
          <input
            type="tel"
            name="phone"
            placeholder="טלפון"
            value={form.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          <span className="sr-only">תוכן</span>
          <textarea
            name="message"
            placeholder="תוכן"
            rows={6}
            value={form.message}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="btn btn--dark">
          שלח
        </button>
        {sent && <p className="contact-form__success">תודה רבה, אצור איתך קשר בקרוב</p>}
      </form>

      <div className="contact-details">
        <p>יהודה הראל</p>
        <p>
          אימייל - <a href="mailto:yehuda694@gmail.com">yehuda694@gmail.com</a>
        </p>
        <p>
          נייד - <a href="tel:0558807139">0558807139</a>
        </p>
      </div>
    </>
  )
}
