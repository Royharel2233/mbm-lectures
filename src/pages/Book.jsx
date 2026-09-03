import Seo, { SITE_URL } from '../components/Seo.jsx'

// Placeholder page for Yehuda's book sales.
// Wire real prices / a checkout (Stripe, PayPal, etc.) into <BookOrderForm> below when ready.
export default function Book() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'מדריך ההישרדות של עם ישראל',
    author: { '@type': 'Person', name: 'יהודה הראל' },
    url: `${SITE_URL}/book`,
  }

  return (
    <>
      <Seo
        title="הספר | מדריך ההישרדות של עם ישראל | MBM LECTURES"
        description="מדריך ההישרדות של עם ישראל – ספרו של יהודה הראל, מייסד המוזיאון המקראי הנייד. מזמינים כאן."
        path="/book"
        jsonLd={jsonLd}
      />

      <h2 className="page-title">הספר</h2>

      <section className="book-page">
        <div className="book-page__cover" aria-hidden="true">
          מדריך ההישרדות
          <br />
          של עם ישראל
        </div>
        <div className="book-page__details">
          <h3>מדריך ההישרדות של עם ישראל</h3>
          <p>מאת יהודה הראל, מייסד המוזיאון המקראי הנייד.</p>
          <p className="book-page__placeholder">
            עמוד זה מוכן לעדכון — הוסיפו כאן תיאור מלא, מחיר, ותהליך הזמנה/תשלום
            לספר.
          </p>
          <a href="mailto:yehuda694@gmail.com?subject=הזמנת ספר" className="btn btn--dark">
            להזמנת הספר
          </a>
        </div>
      </section>
    </>
  )
}
