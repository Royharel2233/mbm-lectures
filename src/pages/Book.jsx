import Seo, { SITE_URL } from '../components/Seo.jsx'
import bookFront from '../assets/images/book-front.png'
import bookBack from '../assets/images/book-back.png'

// Prices / a checkout (Stripe, PayPal, etc.) can replace the mailto link below when ready.
export default function Book() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'מדריך ההישרדות של עם ישראל',
    alternateName: 'תשובה לשאלת השאלות בחקר המקרא: מי כתב את התנ"ך, מתי ומדוע',
    author: { '@type': 'Person', name: 'יהודה הראל' },
    publisher: { '@type': 'Organization', name: 'אופיר ביכורים' },
    isbn: '9786980001128',
    url: `${SITE_URL}/book`,
    offers: {
      '@type': 'Offer',
      price: '84',
      priceCurrency: 'ILS',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <Seo
        title="הספר | מדריך ההישרדות של עם ישראל | MBM LECTURES"
        description={
          'מדריך ההישרדות של עם ישראל – ספרו של יהודה הראל, מייסד המוזיאון המקראי הנייד. תשובה לשאלת השאלות בחקר המקרא: מי כתב את התנ"ך, מתי ומדוע. מזמינים כאן.'
        }
        path="/book"
        jsonLd={jsonLd}
      />

      <h2 className="page-title">הספר</h2>

      <section className="book-page">
        <div className="book-page__covers">
          <img
            className="book-page__cover-img"
            src={bookFront}
            alt='כריכת הספר "מדריך ההישרדות של עם ישראל" מאת יהודה הראל'
            loading="eager"
          />
          <img
            className="book-page__cover-img"
            src={bookBack}
            alt='כריכה אחורית של הספר "מדריך ההישרדות של עם ישראל" עם תקציר ופרטי הזמנה'
            loading="lazy"
          />
        </div>

        <div className="book-page__details">
          <h3>מדריך ההישרדות של עם ישראל</h3>
          <p className="book-page__subtitle">
            תשובה לשאלת השאלות בחקר המקרא: מי כתב את התנ&quot;ך, מתי ומדוע
          </p>

          <p>
            מדריך ההישרדות של עם ישראל הוא ספר עיון בתחום חקר המקרא וראשית עם
            ישראל. במרכזו עומדת תיאוריה חדשה ומקורית שמספקת את הסיבה העקרית
            שבגללה נכתבה התורה ואת זהותם ומטרתם של מי שכתבו חלקים שונים בתנ&quot;ך.
          </p>
          <p>
            הספר כולל שלושה חידושים מהותיים אשר כל אחד מהם נטען לראשונה: החידוש
            הראשון, אשר נמצא במוקד התיאוריה, הוא ההנחה כי קיימת סיבת-על אחת
            לשלבי הביוגרפיה של עם ישראל, כולל הולדת העם, גיבוש תורת ישראל
            והעלאתה על הכתב, וליצירת מוסדותיו ונכסיו הדתיים והתרבותיים, כגון
            השבת, המילה, התפילין והמנורה ועוד.
          </p>
          <p className="book-page__highlight">
            הסיבה שדחפה ליצירת כל אלה היא הישרדות העם.
          </p>
          <p>
            בספר משולבות תמונות ממחישות אשר רובן נלקחו מאוסף המוזיאון המקראי
            הנייד, שכתובתו: <a href={SITE_URL}>www.mbmlectures.com</a>.
          </p>
          <p>
            יהודה הראל הוא חוקר מקרא עצמאי, מרצה, מורה דרך מוסמך בארץ ובחו&quot;ל,
            מדריך במוזיאונים מקראיים בארץ ובעולם ומייסד המוזיאון המקראי הנייד.
          </p>

          <div className="book-page__buy">
            <span className="book-page__price">84 ₪ כולל מע&quot;מ</span>
            <a href="mailto:yehuda694@gmail.com?subject=הזמנת ספר" className="btn btn--dark">
              להזמנת הספר
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
