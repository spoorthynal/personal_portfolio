import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import './App.css'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
