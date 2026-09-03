import { Link } from 'react-router-dom'
import Seo, { SITE_URL } from '../components/Seo.jsx'
import scroll from '../assets/images/home-scroll.jpg'
import figurine from '../assets/images/home-figurine.jpg'
import coin from '../assets/images/home-coin.jpg'
import relief from '../assets/images/hero-relief.jpg'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Museum',
    name: 'המוזיאון המקראי הנייד | MBM Lectures',
    alternateName: 'Mobile Biblical Museum',
    url: SITE_URL,
    email: 'yehuda694@gmail.com',
    founder: { '@type': 'Person', name: 'יהודה הראל' },
    description:
      'סיור מודרך במכמני אוסף ארכאולוגי מקראי, המביא את סיפורי המקרא בגובה העיניים בביתכם.',
  }

  return (
    <>
      <Seo
        title="המוזיאון המקראי הנייד | MBM LECTURES | ISRAEL | הרצאות וסיורים"
        description={
          'יהודה הראל הוא חוקר מקרא עצמאי, מורה דרך מוסמך ומדריך בארץ ובחו"ל למעלה מ-20 שנה. הזמינו עכשיו אחת מיותר מ-30 ההרצאות המרתקות והייחודיות שמציע המוזיאון. כל הרצאה בבית המזמין תלווה בהצגת פריטים עתיקים ומקוריים מתקופת המקרא.'
        }
        path="/"
        jsonLd={jsonLd}
      />

      <section className="hero-gallery" aria-label="פריטים מהאוסף הארכאולוגי">
        <img src={scroll} alt="מגילה עתיקה עם כתובת עברית מתקופת המקרא" loading="eager" />
        <img src={figurine} alt="פסלון חרס עתיק מתקופת המקרא" loading="eager" />
        <img src={coin} alt="מטבע עתיק עם דיוקן, מהאוסף הארכאולוגי" loading="eager" />
      </section>

      <div className="cta-row">
        <Link to="/lectures" className="btn btn--dark">
          לכל ההרצאות
        </Link>
      </div>

      <section className="intro-box">
        <p>
          האתר MBM LECTURES שאתה צופה בו כעת אינו אתר רגיל למעשה הוא איננו אתר כלל.
          <br />
          הוא מוזיאון.
          <br />
          מוזיאון מיוחד במינו.
          <br />
          שונה ממוזיאון רגיל במבנהו אך זהה במהותו ובתכולתו.
        </p>
        <p>
          הרשה לנו אפוא להזמין אותך לסיור מרתק בזמנך החופשי, במקומך החופשי.
          <br />
          ללא כרטיס כניסה, ללא כרטיס טיסה וללא תורים.
        </p>
        <p>
          סיור מודרך במכמניו של אוסף ארכאולוגי מקראי שנאסף במיוחד כדי להמחיש את
          סיפורי המקרא בגובה העיניים ולהכיר מקרוב את עולמם של אבותינו ופריטי היום
          יום שהשאירו אחריהם.
          <br />
          אלה הנכסים שקושרים אותנו לארצנו ומבססים את מורשת עמנו.
        </p>
      </section>

      <p className="thank-you">
        תודה על היענותך וברוך בואך בשערי המוזיאון המקראי הנייד הראשון מסוגו.
      </p>

      <img className="hero-strip" src={relief} alt="תבליטים ארכאולוגיים מתקופת המקרא" loading="lazy" />
    </>
  )
}
