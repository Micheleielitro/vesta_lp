'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function slugify(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '.')
    .replace(/[^a-z0-9.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.+|\.+$/g, '')
}

export default function EmailGenerator() {
  const [name, setName]       = useState('')
  const [copied, setCopied]   = useState(false)
  const [focused, setFocused] = useState(false)
  const inputRef = useRef(null)

  const slug  = slugify(name)
  const email = slug ? `${slug}@vestamail.it` : null

  const copy = async () => {
    if (!email) return
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="egw">
      <div className="egw-label">Crea la tua Vesta Mail — gratis</div>

      {/* Input */}
      <div className={`egw-input-wrap ${focused ? 'focused' : ''}`}>
        <span className="egw-input-icon">👤</span>
        <input
          ref={inputRef}
          className="egw-input"
          type="text"
          placeholder="Il tuo nome…"
          value={name}
          onChange={e => setName(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          maxLength={40}
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      {/* Generated email */}
      <AnimatePresence mode="wait">
        {email ? (
          <motion.div
            key="email"
            className="egw-result"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="egw-result-email">
              <span className="egw-slug">{slug}</span>
              <span className="egw-at">@</span>
              <span className="egw-domain">vestamail.it</span>
            </div>
            <button className={`egw-copy ${copied ? 'copied' : ''}`} onClick={copy}>
              {copied ? '✓ Copiata' : 'Copia'}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            className="egw-placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="egw-placeholder-preview">
              il-tuo-nome<span style={{ color: 'var(--purple-light)' }}>@vestamail.it</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="egw-hint">
        ✦ Unica · Personale · Per sempre tua
      </div>
    </div>
  )
}
