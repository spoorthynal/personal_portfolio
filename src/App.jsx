import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <Footer />
    </ThemeProvider>
  )
}

export default App
