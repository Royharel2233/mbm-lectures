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

        <img className="modal__image" src={lecture.image} alt={lecture.title} />

        {lecture.imageCaption && <p className="modal__caption">{lecture.imageCaption}</p>}

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
