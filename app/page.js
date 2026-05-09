'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import OnboardingWizard from '../components/OnboardingWizard'
import SlidesGallery from '../components/SlidesGallery'
import VestaLogo from '../components/VestaLogo'

const ease = [0.16, 1, 0.3, 1]

function PrimaDopo() {
  return (
    <section className="primadopo-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-divider"><div className="section-divider-gem" /></div>
          <h2 className="section-title">
            Prima <span className="accent">/ Dopo</span>
          </h2>
          <p className="section-sub">La differenza è immediata.</p>
        </div>

        <div className="primadopo-grid">
          <div className="pd-card pd-before">
            <div className="pd-label">PRIMA</div>
            <div className="pd-title">Cerchi una mail per il tracking e perdi tempo.</div>
            <div className="pd-desc">Ordini, tracking, resi, rimborsi, garanzie. Tutto sparso. Difficile da trovare, ancora più difficile da gestire.</div>
            <div className="pd-items">
              {['842 email non lette', 'Tracking impossibile da trovare', 'Garanzie scadute senza saperlo', 'Resi persi nella posta'].map(t => (
                <div key={t} className="pd-item">
                  <div className="pd-item-dot" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="pd-card pd-after">
            <div className="pd-label">DOPO</div>
            <div className="pd-title">Apri Vesta e vedi tutto subito.</div>
            <div className="pd-desc">Un'unica app. Tutti i tuoi ordini riuniti, le spedizioni tracciate, lo stato sempre aggiornato.</div>
            <div className="pd-items">
              {['Ordini riuniti in un posto', 'Spedizioni tracciate in tempo reale', 'Garanzie con scadenza visibile', 'Resi gestiti in un click'].map(t => (
                <div key={t} className="pd-item">
                  <div className="pd-item-dot" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Features() {
  const items = [
    { icon: '📬', title: 'Mail dedicata', desc: 'Un indirizzo @vesta.app solo tuo. Usalo su qualsiasi store online senza cambiare la tua mail personale.' },
    { icon: '🤖', title: "L'AI lavora per te", desc: 'Vesta legge le email, capisce cosa hai comprato, dove e quanto hai pagato. Non organizzi niente — è già fatto.' },
    { icon: '📦', title: 'Ordini & tracking', desc: 'Ogni conferma ordine e aggiornamento spedizione viene estratto e mostrato in modo chiaro.' },
    { icon: '🛡️', title: 'Garanzie & resi', desc: 'Scadenze, rimborsi e resi sempre sotto controllo. Ricevi un avviso prima che la garanzia scada.' },
    { icon: '📉', title: 'Prezzi intelligenti', desc: 'Imposta un target. Vesta monitora il prezzo e ti avvisa quando scende al momento giusto.' },
    { icon: '🎟️', title: 'Coupon pronti', desc: 'Vesta raccoglie i migliori codici sconto per i tuoi store preferiti. Apri, scegli, usa. Fine.' },
  ]

  return (
    <section className="features-section">
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div className="section-divider"><div className="section-divider-gem" /></div>
        <h2 className="section-title">
          Cosa fa <span className="accent">Vesta</span>
        </h2>
        <p className="section-sub">Tutto quello di cui hai bisogno per lo shopping smart.</p>
      </div>
      <div className="features-grid">
        {items.map((f, i) => (
          <motion.div
            key={f.title}
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55, ease }}
          >
            <span className="feature-icon">{f.icon}</span>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  const wizardRef = useRef(null)

  const scrollToWizard = () => {
    wizardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>
      <Hero onStart={scrollToWizard} />
      <PrimaDopo />
      <Features />
      <SlidesGallery />
      <div ref={wizardRef}>
        <OnboardingWizard />
      </div>
      <footer className="footer">
        <VestaLogo height={28} />
        <p className="footer-text" style={{ marginTop: 12 }}>
          © 2025 Vesta — Tutti i diritti riservati
        </p>
      </footer>
    </main>
  )
}
