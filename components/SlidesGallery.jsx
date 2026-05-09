'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  { src: '/slides/slide-01.jpg', caption: 'Quante email hai per i tuoi acquisti?' },
  { src: '/slides/slide-02.jpg', caption: 'Prima / Dopo' },
  { src: '/slides/slide-03.jpg', caption: "L'AI di Vesta lavora per te" },
  { src: '/slides/slide-04.jpg', caption: 'Prezzi intelligenti' },
  { src: '/slides/slide-05.jpg', caption: 'Recensioni semplificate' },
  { src: '/slides/slide-06.jpg', caption: 'La pubblicità non ti intasa più l\'email' },
  { src: '/slides/slide-07.jpg', caption: 'Resi e problemi? Ci pensa Vesta' },
  { src: '/slides/slide-08.jpg', caption: 'Coupon sempre a portata di mano' },
  { src: '/slides/slide-09.jpg', caption: 'Il regalo perfetto esiste' },
  { src: '/slides/slide-10.jpg', caption: 'Un solo account per tutto l\'e-commerce' },
]

export default function SlidesGallery() {
  const [active, setActive] = useState(null)
  const trackRef = useRef(null)

  const open  = (i) => setActive(i)
  const close = () => setActive(null)
  const prev  = (e) => { e.stopPropagation(); setActive(i => (i - 1 + SLIDES.length) % SLIDES.length) }
  const next  = (e) => { e.stopPropagation(); setActive(i => (i + 1) % SLIDES.length) }

  useEffect(() => {
    const onKey = (e) => {
      if (active === null) return
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  setActive(i => (i - 1 + SLIDES.length) % SLIDES.length)
      if (e.key === 'ArrowRight') setActive(i => (i + 1) % SLIDES.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section className="gallery-section">
      <div style={{ textAlign: 'center', marginBottom: 48, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-badge">5</div>
        <h2 className="section-title">
          Tutto quello che <span className="accent">Vesta fa</span>
        </h2>
        <p className="section-sub">Tocca una slide per ingrandirla</p>
      </div>

      {/* Scrollable track */}
      <div className="gallery-track-wrap">
        <div className="gallery-track" ref={trackRef}>
          {SLIDES.map((s, i) => (
            <motion.button
              key={i}
              className="gallery-thumb"
              onClick={() => open(i)}
              whileHover={{ scale: 1.04, y: -6 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.22 }}
            >
              <img src={s.src} alt={s.caption} />
              <div className="gallery-thumb-overlay">
                <span className="gallery-thumb-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Fade edges */}
        <div className="gallery-fade gallery-fade-left" />
        <div className="gallery-fade gallery-fade-right" />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={close}
          >
            <motion.div
              className="lightbox-inner"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={SLIDES[active].src}
                alt={SLIDES[active].caption}
                className="lightbox-img"
              />
              <div className="lightbox-caption">{SLIDES[active].caption}</div>
              <div className="lightbox-counter">{active + 1} / {SLIDES.length}</div>
            </motion.div>

            <button className="lb-nav lb-prev" onClick={prev} aria-label="Precedente">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="lb-nav lb-next" onClick={next} aria-label="Successiva">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <button className="lb-close" onClick={close} aria-label="Chiudi">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
