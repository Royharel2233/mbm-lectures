import { useState } from 'react'

const PAYPAL_BUSINESS_EMAIL = 'royharel22@gmail.com'
const BIT_PHONE = '058-880-7139'
const BOOK_PRICE_ILS = '84.00'
const BOOK_NAME = 'מדריך ההישרדות של עם ישראל'

export default function BookPurchase() {
  const [copied, setCopied] = useState(false)

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(BIT_PHONE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — the number is shown on screen anyway.
    }
  }

  return (
    <div className="book-purchase">
      <h4 className="book-purchase__heading">להזמנת הספר</h4>
      <p className="book-purchase__price">{BOOK_PRICE_ILS} ₪ כולל מע&quot;מ, כולל משלוח</p>

      <div className="book-purchase__options">
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
          rel="noreferrer"
          className="book-purchase__option"
        >
          <input type="hidden" name="cmd" value="_xclick" />
          <input type="hidden" name="business" value={PAYPAL_BUSINESS_EMAIL} />
          <input type="hidden" name="item_name" value={BOOK_NAME} />
          <input type="hidden" name="amount" value={BOOK_PRICE_ILS} />
          <input type="hidden" name="currency_code" value="ILS" />
          <input type="hidden" name="no_shipping" value="0" />
          <button type="submit" className="btn btn--paypal">
            <span>שלם עם</span>
            <strong>PayPal</strong>
          </button>
        </form>

        <div className="book-purchase__option book-purchase__bit">
          <p className="book-purchase__bit-label">תשלום ב-Bit</p>
          <button type="button" className="book-purchase__phone" onClick={copyPhone}>
            {BIT_PHONE}
            <span className="book-purchase__copy-hint">{copied ? 'הועתק!' : 'העתק'}</span>
          </button>
          <p className="book-purchase__bit-note">
            שלחו תשלום דרך אפליקציית Bit למספר שלמעלה, ואז שלחו אישור תשלום
            ופרטי משלוח למייל{' '}
            <a href="mailto:yehuda694@gmail.com?subject=אישור תשלום Bit - הזמנת ספר">
              yehuda694@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
