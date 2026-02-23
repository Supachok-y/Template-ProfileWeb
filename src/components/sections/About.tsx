import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'
import { content } from '../../data/content'

export default function About() {
  const { theme } = useTheme()
  const { lang } = useLang()
  const t = content[lang].about
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className={`py-24 w-full ${isDark ? 'bg-[#111827]' : 'bg-white'}`}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00A9FF] mb-3">{t.title}</span>
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.title}</h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-[#00A9FF] to-[#A0E9FF]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }} className="relative"
          >
            <div className={`rounded-2xl p-8 border ${isDark ? 'bg-[#1a2235] border-[#1e3a5f]' : 'bg-[#e8f4fd] border-[#bae6fd]'}`}>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className={`h-16 rounded-xl ${i === 4 ? 'bg-gradient-to-br from-[#00A9FF] to-[#A0E9FF]' : isDark ? 'bg-[#111827]' : 'bg-white'}`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#00A9FF]/15 text-[#00A9FF] border border-[#00A9FF]/30">{tag}</span>
                ))}
              </div>
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00A9FF]/10 to-[#A0E9FF]/10 blur-xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col gap-5"
          >
            {t.paragraphs.map((para, i) => (
              <motion.p
                key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
