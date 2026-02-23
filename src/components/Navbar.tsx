import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()
  const t = content[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isDark = theme === 'dark'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t.about, href: '#about' },
    { label: t.experience, href: '#experience' },
    { label: t.skills, href: '#skills' },
    { label: t.projects, href: '#projects' },
    { label: t.contact, href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#0a0f1a]/90 backdrop-blur-md border-b border-[#1e3a5f] shadow-lg'
            : 'bg-white/90 backdrop-blur-md border-b border-[#bae6fd] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-[#00A9FF] to-[#A0E9FF] bg-clip-text text-transparent"
          >
            AJ.
          </motion.a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2 }}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#00A9FF] ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLang}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                isDark
                  ? 'border-[#1e3a5f] text-[#89CFF3] hover:bg-[#00A9FF]/10'
                  : 'border-[#bae6fd] text-[#00A9FF] hover:bg-[#00A9FF]/10'
              }`}
            >
              {lang === 'en' ? 'TH' : 'EN'}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                isDark
                  ? 'border-[#1e3a5f] text-yellow-300 hover:bg-[#00A9FF]/10'
                  : 'border-[#bae6fd] text-gray-600 hover:bg-[#00A9FF]/10'
              }`}
            >
              {isDark ? '☀️' : '🌙'}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                isDark ? 'border-[#1e3a5f] text-gray-300' : 'border-[#bae6fd] text-gray-600'
              }`}
            >
              {menuOpen ? '✕' : '☰'}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t w-full ${
              isDark ? 'bg-[#0a0f1a]/95 border-[#1e3a5f]' : 'bg-white/95 border-[#bae6fd]'
            }`}
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-[#00A9FF] ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
