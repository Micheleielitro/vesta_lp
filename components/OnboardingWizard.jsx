'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STEPS = [
  {
    step: '01 / 04',
    title: 'La tua\nVesta Mail',
    subtitle: 'Un indirizzo tutto tuo',
    description:
      'Appena ti registri, Vesta ti assegna un indirizzo email personale e dedicato. È il tuo accesso unico a tutto lo shopping online.',
  },
  {
    step: '02 / 04',
    title: 'Usala\nsugli store',
    subtitle: 'Funziona ovunque',
    description:
      "Registrati con la tua Vesta Mail su Amazon, Shein, Zalando e qualsiasi altro store. Oppure aggiornala nei tuoi account esistenti.",
    tip: "Consiglio: inizia con un account nuovo per testare. Quando sei soddisfatto, migra il tuo account esistente con i punti accumulati.",
  },
  {
    step: '03 / 04',
    title: 'Vesta\npensa a tutto',
    subtitle: 'Automazione totale',
    description:
      "Ogni conferma d'ordine, aggiornamento di spedizione, garanzia o reso viene letto e organizzato da Vesta in modo automatico, in tempo reale.",
  },
  {
    step: '04 / 04',
    title: 'Stiamo\narrivando.',
    subtitle: 'Presto disponibile',
    description:
      "Vesta è in arrivo. Stiamo costruendo qualcosa di grande — sei già tra i primi a scoprirla. Condividila con chi vuoi bene.",
  },
]

function EmailVisual() {
  return (
    <div className="visual-email">
      <div className="visual-email-card">
        <div className="ve-label">Indirizzo assegnato</div>
        <div className="ve-addr">
          <span className="u">marco</span>
          <span className="a">@</span>
          <span className="d">vestamail.it</span>
          <span className="cursor-blink" />
        </div>
      </div>
      <div className="ve-features">
        {['Personale', 'Permanente', 'Sicuro'].map((f) => (
          <div key={f} className="ve-feature">
            <span className="ve-check">✓</span> {f}
          </div>
        ))}
      </div>
    </div>
  )
}

const STORES = [
  { icon: '📦', name: 'Amazon' },
  { icon: '👗', name: 'Shein' },
  { icon: '👟', name: 'Zalando' },
  { icon: '🛒', name: 'Zara' },
  { icon: '⚽', name: 'Decathlon' },
  { icon: '💻', name: 'MediaWorld' },
  { icon: '🏷️', name: 'ASOS' },
  { icon: '📱', name: 'Apple' },
  { icon: '🎮', name: 'GameStop' },
]

function StoresVisual() {
  return (
    <div className="visual-stores">
      {STORES.map((s, i) => (
        <motion.div
          key={s.name}
          className="store-chip"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.055, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="store-chip-icon">{s.icon}</span>
          <span className="store-chip-name">{s.name}</span>
        </motion.div>
      ))}
    </div>
  )
}

const CARDS = [
  { icon: '📦', label: 'Ordine confermato', sub: 'Sony WH-1000XM5 · Amazon', badge: 'Nuovo', cls: 'dc-order', badgeCls: 'dc-badge-new' },
  { icon: '🛡️', label: 'Garanzia attiva', sub: 'Scade 15/05/2027 · 2 anni', badge: 'OK', cls: 'dc-warranty', badgeCls: 'dc-badge-ok' },
  { icon: '🔄', label: 'Reso in corso', sub: 'Shein · Rimborso 3-5 giorni', badge: 'In attesa', cls: 'dc-return', badgeCls: 'dc-badge-wait' },
]

function DashboardVisual() {
  return (
    <div className="visual-dashboard">
      {CARDS.map((c, i) => (
        <motion.div
          key={c.label}
          className="dashboard-card"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.13, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={`dashboard-card-icon ${c.cls}`}>{c.icon}</div>
          <div className="dashboard-card-info">
            <div className="dc-title">{c.label}</div>
            <div className="dc-sub">{c.sub}</div>
          </div>
          <div className={`dc-badge ${c.badgeCls}`}>{c.badge}</div>
        </motion.div>
      ))}
    </div>
  )
}

function ReadyVisual() {
  return (
    <div className="visual-ready">
      <div className="ready-stars">
        {['★', '★', '★', '★', '★'].map((s, i) => (
          <span key={i} className="ready-star" style={{ animationDelay: `${i * 0.18}s` }}>
            {s}
          </span>
        ))}
      </div>
      <div className="ready-ring">🎯</div>
      <div className="ready-label">Tutto pronto</div>
    </div>
  )
}

const Visuals = [EmailVisual, StoresVisual, DashboardVisual, ReadyVisual]

const slide = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 56 : -56 }),
  center: { opacity: 1, x: 0 },
  exit:  (dir) => ({ opacity: 0, x: dir > 0 ? -56 : 56 }),
}

const transition = { duration: 0.42, ease: [0.16, 1, 0.3, 1] }

export default function OnboardingWizard() {
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (next) => {
    setDir(next > step ? 1 : -1)
    setStep(next)
  }

  const current = STEPS[step]
  const Visual = Visuals[step]
  const isLast = step === STEPS.length - 1

  return (
    <section className="wizard-section" id="wizard">
      <div className="wizard-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-divider"><div className="section-divider-gem" /></div>
        <h2 className="section-title">
          Come funziona <span className="accent">Vesta</span>
        </h2>
        <p className="section-sub">Quattro passi verso lo shopping senza pensieri</p>
      </div>

      <div className="wizard-progress">
        {STEPS.map((_, i) => (
          <button
            key={i}
            className={`progress-dot ${i === step ? 'active' : i < step ? 'done' : ''}`}
            onClick={() => go(i)}
            aria-label={`Vai al passo ${i + 1}`}
          />
        ))}
      </div>

      <div className="step-card">
        {/* Visual panel */}
        <div className="step-visual">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={`v-${step}`}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              style={{ width: '100%' }}
            >
              <Visual />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content panel */}
        <div className="step-content">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={`c-${step}`}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="step-content-inner"
            >
              <div className="step-number">{step + 1}</div>

              <h3 className="step-title">
                {current.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h3>

              <div className="step-subtitle">{current.subtitle}</div>
              <p className="step-description">{current.description}</p>

              {current.tip && (
                <div className="step-tip">
                  <span className="step-tip-icon">💡</span>
                  <span>{current.tip}</span>
                </div>
              )}

              <div className="step-nav">
                {step > 0 && (
                  <button className="btn-prev" onClick={() => go(step - 1)}>
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Indietro
                  </button>
                )}

                {!isLast ? (
                  <button className="btn-next" onClick={() => go(step + 1)}>
                    Avanti
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <div className="cta-stack">
                    <button
                      className="btn-cta-primary"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      ✉️ Crea la tua Vesta Mail
                    </button>
                    <button
                      className="btn-cta-secondary"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({ title: 'Vesta', text: 'Scopri Vesta — il tuo assistente shopping AI con email dedicata @vestamail.it', url: window.location.href })
                        } else {
                          navigator.clipboard.writeText(window.location.href)
                          alert('Link copiato!')
                        }
                      }}
                    >
                      Condividi Vesta 🚀
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
