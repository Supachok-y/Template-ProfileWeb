import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'
import { content } from '../../data/content'

export default function Contact() {
  const { theme } = useTheme()
  const { lang } = useLang()
  const t = content[lang].contact
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const contactLinks = [
    {
      label: 'Email', value: t.email, href: `mailto:${t.email}`, gradient: 'from-[#00A9FF] to-[#A0E9FF]',
      icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
      label: 'LinkedIn', value: 'linkedin.com/in/alexjohnson', href: 'https://example.com/', gradient: 'from-[#89CFF3] to-[#CDF5FD]',
      icon: <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    },
    {
      label: 'GitHub', value: 'github.com/alexjohnson', href: 'https://example.com/', gradient: 'from-[#A0E9FF] to-[#89CFF3]',
      icon: <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>,
    },
  ]

  return (
    <section id="contact" ref={ref} className={`py-24 w-full ${isDark ? 'bg-[#111827]' : 'bg-white'}`}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00A9FF] mb-3">{t.title}</span>
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.title}</h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-[#00A9FF] to-[#A0E9FF]" />
          <p className={`mt-4 text-base max-w-md ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label} href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }} whileHover={{ x: 4 }}
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200 group ${
                  isDark ? 'bg-[#1a2235] border-[#1e3a5f] hover:border-[#00A9FF]/40' : 'bg-[#f0f9ff] border-[#bae6fd] hover:border-[#00A9FF]/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  {link.icon}
                </div>
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{link.label}</p>
                  <p className={`text-sm font-medium group-hover:text-[#00A9FF] transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }} onSubmit={handleSubmit}
            className={`rounded-2xl p-6 border ${isDark ? 'bg-[#1a2235] border-[#1e3a5f]' : 'bg-[#f0f9ff] border-[#bae6fd]'}`}
          >
            <div className="flex flex-col gap-4">
              {[{ key: 'name', type: 'text', placeholder: t.form.name }, { key: 'email', type: 'email', placeholder: t.form.email }].map(field => (
                <div key={field.key}>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{field.placeholder}</label>
                  <input
                    type={field.type} required
                    value={form[field.key as 'name' | 'email']}
                    onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-[#00A9FF] focus:ring-2 focus:ring-[#00A9FF]/20 ${
                      isDark ? 'bg-[#111827] border-[#1e3a5f] text-white placeholder-gray-600' : 'bg-white border-[#bae6fd] text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>
              ))}
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.form.message}</label>
                <textarea
                  required rows={5} value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder={t.form.message}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-[#00A9FF] focus:ring-2 focus:ring-[#00A9FF]/20 resize-none ${
                    isDark ? 'bg-[#111827] border-[#1e3a5f] text-white placeholder-gray-600' : 'bg-white border-[#bae6fd] text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
              <motion.button
                type="submit" whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] text-white text-sm font-semibold shadow-lg shadow-[#00A9FF]/30 hover:shadow-[#00A9FF]/50 transition-shadow duration-200"
              >
                {sent ? '✓ Sent!' : t.form.send}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
        className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t text-center ${
          isDark ? 'border-[#1e3a5f] text-gray-600' : 'border-[#bae6fd] text-gray-400'
        }`}
      >
        <p className="text-sm">© 2025 Alex Johnson. Built with React + Vite + TailwindCSS.</p>
      </motion.div>
    </section>
  )
}
