import { useTheme } from './context/ThemeContext'
import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  const { theme } = useTheme()
  useLenis()

  return (
    <div className={`w-full min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
