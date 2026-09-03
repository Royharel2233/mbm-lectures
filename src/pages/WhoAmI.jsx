import { Link } from 'react-router-dom'
import Seo, { SITE_URL } from '../components/Seo.jsx'
import portrait from '../assets/images/whoami-portrait.jpg'
import lecturePhoto from '../assets/images/whoami-lecture.jpg'

export default function WhoAmI() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'יהודה הראל',
    jobTitle: 'חוקר מקרא, מורה דרך ומדריך',
    url: `${SITE_URL}/whoami`,
    email: 'yehuda694@gmail.com',
    knowsAbout: ['ארכיאולוגיה מקראית', 'תולדות המקרא', 'מורשת ישראל'],
  }

  return (
    <>
      <Seo
        title="מי אני? | Mbm Lectures | Israel"
        description={'יהודה הראל הוא חוקר מקרא עצמאי, מורה דרך מוסמך ומדריך בארץ ובחו"ל למעלה מ-20 שנה.'}
        path="/whoami"
        jsonLd={jsonLd}
      />

      <h2 className="page-title">מי אני?</h2>

      <section className="whoami">
        <img className="whoami__portrait" src={portrait} alt="יהודה הראל, מייסד המוזיאון המקראי הנייד" loading="eager" />

        <div className="whoami__text">
          <h3>יהודה הראל</h3>
          <p>
            חוקר מקרא עצמאי, מורה דרך מוסמך ומדריך בארץ ובחו&quot;ל למעלה מ-20 שנה.
            מדריך מתנדב בכיר במוזיאון &quot;ארצות המקרא ירושלים&quot; ב-20 השנים
            האחרונות.
          </p>
          <p>
            בעליו של אוסף עתיקות מקראיות ויהודיות עליו הוא מרצה ומציג לקהל הרחב.
            מייסד המוזיאון המקראי הנייד, הראשון מסוגו, ומחבר הספר{' '}
            <Link to="/book">&quot;מדריך ההישרדות של עם ישראל&quot;</Link>.
          </p>
          <p>
            <Link to="/lectures" className="link-strong">
              לחץ כאן לפירוט ההרצאות וההדרכות
            </Link>
          </p>
        </div>
      </section>

      <img className="whoami__photo" src={lecturePhoto} alt="יהודה הראל מרצה ומציג פריטים ארכאולוגיים" loading="lazy" />

      <blockquote className="quote">
        <p>תמיד יש משהו חדש שאנחנו יכולים ללמוד על כל דבר.</p>
        <cite>פרנק הרברט</cite>
      </blockquote>
    </>
  )
}
