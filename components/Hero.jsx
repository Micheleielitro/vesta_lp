'use client'

import { motion } from 'framer-motion'
import VestaLogo from './VestaLogo'
import EmailGenerator from './EmailGenerator'

const ease = [0.16, 1, 0.3, 1]

export default function Hero({ onStart }) {
  return (
    <section className="hero">
      <div className="hero-glow-top" />

      <nav className="nav">
        <VestaLogo height={34} />
        <button className="nav-cta" onClick={onStart}>Come funziona</button>
      </nav>

      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
      >
        <div className="hero-badge-dot" />
        Assistente shopping AI
      </motion.div>

      <motion.h1
        className="hero-headline"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.2, ease }}
      >
        Ogni ordine, ogni garanzia,
        <br />
        <span className="accent">tutto in un posto.</span>
      </motion.h1>

      <motion.p
        className="hero-sub"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.34, ease }}
      >
        Vesta ti assegna un indirizzo <strong>@vestamail.it</strong> dedicato.
        Usalo su Amazon, Shein, Zalando — e traccia tutto automaticamente.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.46, ease }}
      >
        <button className="btn-primary" onClick={onStart}>
          Scopri come funziona
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.58, ease }}
      >
        <EmailGenerator />
      </motion.div>
    </section>
  )
}
