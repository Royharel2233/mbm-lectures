import { useEffect, useRef } from 'react'

export default function LectureModal({ lecture, onClose }) {
  const closeBtnRef = useRef(null)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    closeBtnRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!lecture) return null

  // modalImages, when present, is the authoritative set of images/captions for
  // the popup (can be empty for text-only lectures). Otherwise fall back to
  // the single grid thumbnail + its caption.
  const images =
    lecture.modalImages !== undefined
      ? lecture.modalImages
      : lecture.image
        ? [{ src: lecture.image, caption: lecture.imageCaption }]
        : []

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lecture-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="סגור"
        >
          ×
        </button>

        {images.length > 0 && (
          <div className="modal__images">
            {images.map((img, i) => (
              <figure key={i} className="modal__figure">
                <img className="modal__image" src={img.src} alt={lecture.title} />
                {img.caption && <figcaption className="modal__caption">{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        <h3 id="lecture-modal-title" className="modal__title">
          {lecture.title}
        </h3>

        <p className="modal__description">{lecture.description}</p>

        <button type="button" className="btn btn--dark modal__back" onClick={onClose}>
          חזור לאתר
        </button>
      </div>
    </div>
  )
}
