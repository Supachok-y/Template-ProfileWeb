import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'
import { content } from '../../data/content'

export default function Experience() {
  const { theme } = useTheme()
  const { lang } = useLang()
  const t = content[lang].experience
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className={`py-24 w-full ${isDark ? 'bg-[#0a0f1a]' : 'bg-[#f0f9ff]'}`}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00A9FF] mb-3">{t.title}</span>
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.title}</h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-[#00A9FF] to-[#A0E9FF]" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00A9FF] via-[#89CFF3] to-[#CDF5FD]" />
          <div className="flex flex-col gap-12">
            {t.items.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#00A9FF] border-2 border-[#0a0f1a] z-10 top-6 md:top-1/2 md:-translate-y-1/2" />
                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`rounded-2xl p-6 border transition-all duration-200 ${
                        isDark ? 'bg-[#1a2235] border-[#1e3a5f] hover:border-[#00A9FF]/40' : 'bg-white border-[#bae6fd] hover:border-[#00A9FF]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.role}</h3>
                        <span className={`text-xs font-medium whitespace-nowrap ml-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.period}</span>
                      </div>
                      <p className="text-sm font-semibold text-[#00A9FF] mb-3">{item.company}</p>
                      <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#00A9FF]/15 text-[#00A9FF] border border-[#00A9FF]/30">{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
