import { useState } from 'react'
import Seo, { SITE_URL } from '../components/Seo.jsx'
import LectureModal from '../components/LectureModal.jsx'
import { lectures } from '../data/lectures.js'

export default function Lectures() {
  const [active, setActive] = useState(null)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    url: `${SITE_URL}/lectures`,
    itemListElement: lectures.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Event',
        name: l.title,
        description: l.description,
      },
    })),
  }

  return (
    <>
      <Seo
        title="הרצאות ומוצגים | mbm lectures | הרצאות והדרכות מקראיות | ISRAEL"
        description={
          'יהודה הראל הוא חוקר מקרא עצמאי, מורה דרך מוסמך ומדריך בארץ ובחו"ל למעלה מ-20 שנה. בואו לשמוע אחת מיותר מ-30 ההרצאות המרתקות והייחודיות שמציע המוזיאון בביתך. mbm lectures.'
        }
        path="/lectures"
        jsonLd={jsonLd}
      />

      <h2 className="page-title">הרצאות, סיורים ומוצגים</h2>

      <p className="lectures-intro">
        המוזיאון המקראי הנייד מעמיד לרשותכם מבחר של 30 הרצאות מרתקות, מלוות
        במוצגים ארכאולוגים אותנטיים בני אלפי שנים, מאוסף פרטי שטרם הוצג במלואו,
        הממחישים ומנגישים את סיפורי המקרא בגובה העיניים ובשפה מובנת לכל. חוויה
        מעשירה ומרחיבת אופקים - מובטחת.
      </p>

      <ul className="lecture-grid">
        {lectures.map((lecture) => (
          <li key={lecture.slug} className="lecture-card">
            <button
              type="button"
              className="lecture-card__button"
              onClick={() => setActive(lecture)}
              aria-haspopup="dialog"
            >
              <img src={lecture.image} alt={lecture.title} loading="lazy" />
              <span>{lecture.title}</span>
            </button>
          </li>
        ))}
      </ul>

      {active && <LectureModal lecture={active} onClose={() => setActive(null)} />}
    </>
  )
}
