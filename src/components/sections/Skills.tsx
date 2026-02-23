import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'
import { content } from '../../data/content'

const levelColor: Record<string, string> = {
  Expert: 'bg-[#00A9FF]/20 text-[#00A9FF] border-[#00A9FF]/40',
  Advanced: 'bg-[#89CFF3]/20 text-[#89CFF3] border-[#89CFF3]/40',
  Moderate: 'bg-[#A0E9FF]/20 text-[#A0E9FF] border-[#A0E9FF]/40',
  Beginner: 'bg-gray-500/10 text-gray-400 border-gray-500/30',
  'เชี่ยวชาญ': 'bg-[#00A9FF]/20 text-[#00A9FF] border-[#00A9FF]/40',
  'ชำนาญ': 'bg-[#89CFF3]/20 text-[#89CFF3] border-[#89CFF3]/40',
  'ปานกลาง': 'bg-[#A0E9FF]/20 text-[#A0E9FF] border-[#A0E9FF]/40',
  'เริ่มต้น': 'bg-gray-500/10 text-gray-400 border-gray-500/30',
}

function SkillCard({ name, level, index, isInView, isDark }: { name: string; level: string; index: number; isInView: boolean; isDark: boolean }) {
  const badge = levelColor[level] ?? 'bg-[#CDF5FD]/20 text-[#CDF5FD] border-[#CDF5FD]/40'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ y: -3, scale: 1.02 }}
      className={`rounded-xl px-5 py-4 border flex items-center justify-between transition-all duration-200 ${
        isDark ? 'bg-[#1a2235] border-[#1e3a5f] hover:border-[#00A9FF]/40' : 'bg-white border-[#bae6fd] hover:border-[#00A9FF]/50'
      }`}
    >
      <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{name}</span>
      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${badge}`}>{level}</span>
    </motion.div>
  )
}

function LangCard({ name, level, index, isInView, isDark }: { name: string; level: string; index: number; isInView: boolean; isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -4, scale: 1.03 }}
      className={`rounded-xl p-4 border text-center transition-all duration-200 ${
        isDark ? 'bg-[#1a2235] border-[#1e3a5f] hover:border-[#00A9FF]/40' : 'bg-white border-[#bae6fd] hover:border-[#00A9FF]/50'
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A9FF] to-[#A0E9FF] flex items-center justify-center mx-auto mb-2">
        <span className="text-white text-sm font-bold">{name.slice(0, 2).toUpperCase()}</span>
      </div>
      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{name}</p>
      <p className="text-xs text-[#00A9FF] mt-0.5">{level}</p>
    </motion.div>
  )
}

export default function Skills() {
  const { theme } = useTheme()
  const { lang } = useLang()
  const t = content[lang].skills
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className={`py-24 w-full ${isDark ? 'bg-[#111827]' : 'bg-white'}`}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00A9FF] mb-3">{t.title}</span>
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.title}</h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-[#00A9FF] to-[#A0E9FF]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`rounded-2xl p-6 border ${isDark ? 'bg-[#0a0f1a] border-[#1e3a5f]' : 'bg-[#f0f9ff] border-[#bae6fd]'}`}
          >
            <h3 className={`text-lg font-bold mb-5 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="w-2 h-2 rounded-full bg-[#00A9FF] inline-block" />{t.hardSkills.label}
            </h3>
            <div className="flex flex-col gap-3">
              {t.hardSkills.items.map((skill, i) => (
                <SkillCard key={skill.id} name={skill.name} level={skill.level} index={i} isInView={isInView} isDark={isDark} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`rounded-2xl p-6 border ${isDark ? 'bg-[#0a0f1a] border-[#1e3a5f]' : 'bg-[#f0f9ff] border-[#bae6fd]'}`}
          >
            <h3 className={`text-lg font-bold mb-5 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="w-2 h-2 rounded-full bg-[#A0E9FF] inline-block" />{t.softSkills.label}
            </h3>
            <div className="flex flex-col gap-3">
              {t.softSkills.items.map((skill, i) => (
                <SkillCard key={skill.id} name={skill.name} level={skill.level} index={i} isInView={isInView} isDark={isDark} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`md:col-span-2 rounded-2xl p-6 border ${isDark ? 'bg-[#0a0f1a] border-[#1e3a5f]' : 'bg-[#f0f9ff] border-[#bae6fd]'}`}
          >
            <h3 className={`text-lg font-bold mb-5 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="w-2 h-2 rounded-full bg-[#CDF5FD] inline-block" />{t.languages.label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t.languages.items.map((l, i) => (
                <LangCard key={l.id} name={l.name} level={l.level} index={i} isInView={isInView} isDark={isDark} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
