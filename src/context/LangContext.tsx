import { createContext, useContext, useState } from 'react'

type Lang = 'th' | 'en'

interface LangContextType {
  lang: Lang
  toggleLang: () => void
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  toggleLang: () => {},
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    return (saved as Lang) || 'en'
  })

  const toggleLang = () => {
    setLang(prev => {
      const next = prev === 'en' ? 'th' : 'en'
      localStorage.setItem('lang', next)
      return next
    })
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
