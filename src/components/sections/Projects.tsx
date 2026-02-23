import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'
import { content } from '../../data/content'

export default function Projects() {
  const { theme } = useTheme()
  const { lang } = useLang()
  const t = content[lang].projects
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  const paginate = (dir: number) => {
    setDirection(dir)
    setCurrent(prev => {
      const next = prev + dir
      if (next < 0) return t.items.length - 1
      if (next >= t.items.length) return 0
      return next
    })
  }

  const project = t.items[current]

  return (
    <section id="projects" ref={ref} className={`py-24 w-full ${isDark ? 'bg-[#0a0f1a]' : 'bg-[#f0f9ff]'}`}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00A9FF] mb-3">{t.title}</span>
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.title}</h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-[#00A9FF] to-[#A0E9FF]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-2xl mx-auto"
        >
          <div className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-[#1a2235] border-[#1e3a5f]' : 'bg-white border-[#bae6fd]'}`}>
            {/* Image placeholder */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={project.id} custom={direction} variants={slideVariants}
                  initial="enter" animate="center" exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className={`absolute inset-0 flex items-center justify-center ${isDark ? 'bg-[#111827]' : 'bg-[#e8f4fd]'}`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00A9FF] to-[#A0E9FF] flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{project.title}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <div className="flex items-center gap-2">
                  <motion.a
                    href={project.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
                      isDark ? 'border-[#1e3a5f] text-gray-400 hover:text-[#00A9FF]' : 'border-[#bae6fd] text-gray-500 hover:text-[#00A9FF]'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={project.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00A9FF] text-white text-xs font-semibold shadow-lg shadow-[#00A9FF]/30"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </motion.a>
                </div>
              </div>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#00A9FF]/15 text-[#00A9FF] border border-[#00A9FF]/30">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => paginate(-1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                isDark ? 'border-[#1e3a5f] text-gray-400 hover:text-[#00A9FF] hover:border-[#00A9FF]' : 'border-[#bae6fd] text-gray-500 hover:text-[#00A9FF] hover:border-[#00A9FF]'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <div className="flex items-center gap-2">
              {t.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-[#00A9FF] w-6' : isDark ? 'w-2.5 bg-[#1e3a5f] hover:bg-[#00A9FF]/40' : 'w-2.5 bg-[#bae6fd] hover:bg-[#00A9FF]/40'
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => paginate(1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                isDark ? 'border-[#1e3a5f] text-gray-400 hover:text-[#00A9FF] hover:border-[#00A9FF]' : 'border-[#bae6fd] text-gray-500 hover:text-[#00A9FF] hover:border-[#00A9FF]'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
